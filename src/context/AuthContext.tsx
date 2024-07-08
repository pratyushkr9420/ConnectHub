import { ReactElement, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  signUp,
  signIn,
  deleteUser,
  type SignInInput,
  confirmSignUp,
  getCurrentUser,
  signOut,
  resetPassword,
  type ResetPasswordOutput,
  ConfirmResetPasswordInput,
  confirmResetPassword,
  fetchUserAttributes,
} from "aws-amplify/auth";
import { AuthStates, CustomAuthUser, SignUpParameters, UserFromDb } from "../utils/types";
import { generateClient } from "aws-amplify/api";
import { createUser } from "../graphql/mutations";
import { getUser } from "../graphql/queries";
import { deleteUserFromDb } from "../utils/userfunctions";

const client = generateClient();

type authenticationContextType = {
  authUser: CustomAuthUser | null | undefined;
  userFromDb: UserFromDb | null | undefined;
  authState: AuthStates;
  isAuthLoading: boolean;
  handleSignIn: ({ username, password }: SignInInput) => void;
  handleSignOut: () => void;
  handleUserDelete: () => Promise<void>;
  handleSignUp: ({ username, password, firstName, lastName }: SignUpParameters) => void;
  handleSignUpConfirmation: ({
    username,
    password,
    confirmationCode,
  }: {
    username: string;
    password: string;
    confirmationCode: string;
  }) => void;
  setAuthState: React.Dispatch<React.SetStateAction<AuthStates>>;
  setAuthUser: React.Dispatch<React.SetStateAction<CustomAuthUser | null | undefined>>;
  setUserFromDb: React.Dispatch<React.SetStateAction<UserFromDb | null | undefined>>;
  getLoggedInUser: () => Promise<CustomAuthUser>;
  getLoggedInUserFromDb: () => Promise<void>;
  handleResetPassword: (username: string) => Promise<ResetPasswordOutput | undefined>;
  handleResetPasswordNextSteps: (output: ResetPasswordOutput) => void;
  handleConfirmResetPassword: ({
    username,
    confirmationCode,
    newPassword,
  }: ConfirmResetPasswordInput) => Promise<void>;
};

const AuthenticationContext = createContext<authenticationContextType | undefined>(undefined);

function useAuthenticationContext() {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error("useAuthenticationContext must be used within a AuthenticationProvider");
  }
  return context;
}

function AuthenticationProvider({ children }: { children: ReactNode }): ReactElement {
  const [authUser, setAuthUser] = useState<CustomAuthUser | null | undefined>();
  const [userFromDb, setUserFromDb] = useState<UserFromDb | null | undefined>();
  const [authState, setAuthState] = useState<AuthStates>("default");
  const [isAuthLoading, setisAuthLoading] = useState<boolean>(false);
  async function handleSignUp({
    username,
    password,
    firstName = "",
    lastName = "",
  }: SignUpParameters) {
    setisAuthLoading(true);
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email: username,
            given_name: firstName,
            family_name: lastName,
          },
          // optional
          autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
        },
      });
      setAuthState("confirmSignUp");
      setisAuthLoading(false);
    } catch (error: any) {
      Alert.alert("error signing up:", error.message);
      setisAuthLoading(false);
    }
  }

  const saveUserToDb = async (user: CustomAuthUser) => {
    const userToAdd: UserFromDb = {
      id: user.userId,
      firstName: user.attributes.given_name,
      lastName: user.attributes.family_name,
      profilePicture: null,
      email: user.attributes.email,
      latitude: null,
      longitude: null,
      notificationToken: null,
    };
    try {
      const newUserInDb = await client.graphql({
        query: createUser,
        variables: {
          input: userToAdd,
        },
      });
      setUserFromDb(userToAdd);
      Alert.alert("User saved to database");
    } catch (e) {
      console.log("Error while saving logged in user to database:", e);
    }
  };

  const getLoggedInUser = async (): Promise<CustomAuthUser> => {
    const currentUser = await getCurrentUser();
    const attributes = await fetchUserAttributes();
    const newAuthUserToSave = { ...currentUser, attributes };
    setAuthUser(newAuthUserToSave);
    return newAuthUserToSave;
  };

  const getLoggedInUserFromDb = async () => {
    try {
      if (authUser) {
        const response = await client.graphql({
          query: getUser,
          variables: { id: authUser.userId },
        });
        const currentLoggedInUserFromDb: UserFromDb = {
          id: response.data.getUser!.id,
          firstName: response.data.getUser!.firstName,
          lastName: response.data.getUser!.lastName,
          profilePicture: response.data.getUser!.profilePicture,
          email: response.data.getUser!.email,
          status: response.data.getUser!.status,
          latitude: response.data.getUser!.latitude,
          longitude: response.data.getUser!.longitude,
          notificationToken: response.data.getUser!.notificationToken,
        };
        setUserFromDb(currentLoggedInUserFromDb);
      }
    } catch (e) {
      console.log("Error while fetching logged in user from database:", e);
    }
  };
  async function handleSignIn({ username, password }: SignInInput) {
    setisAuthLoading(true);
    try {
      const { isSignedIn, nextStep } = await signIn({
        username,
        password,
        options: { authFlowType: "USER_PASSWORD_AUTH" },
      });
      await getLoggedInUser();
      await getLoggedInUserFromDb();
      Alert.alert("User signed in");
      setAuthState("signedIn");
      setisAuthLoading(false);
    } catch (error: any) {
      Alert.alert("error signing in", error.message);
      console.log(error);
      setisAuthLoading(false);
    }
  }

  async function handleSignUpConfirmation({
    username,
    password,
    confirmationCode,
  }: {
    username: string;
    password: string;
    confirmationCode: string;
  }) {
    setisAuthLoading(true);
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode,
      });
      // Alert.alert("User credentials confirmed, you can sign in now");
      // setAuthState("signIn");
      const { isSignedIn } = await signIn({
        username,
        password,
        options: { authFlowType: "USER_PASSWORD_AUTH" },
      });
      const authorizedUser = await getLoggedInUser();
      await saveUserToDb(authorizedUser);
      Alert.alert("User signed in");
      setAuthState("signedIn");
      setisAuthLoading(false);
    } catch (error: any) {
      Alert.alert("error confirming sign up", error.message);
      setisAuthLoading(false);
    }
  }
  async function handleSignOut() {
    try {
      await signOut();
      setAuthUser(undefined);
      setUserFromDb(undefined);
      setAuthState("signIn");
    } catch (error: any) {
      Alert.alert("error signing out: ", error.message);
    }
  }

  async function handleUserDelete() {
    try {
      if (authUser) {
        await deleteUser();
      }
      if (userFromDb) {
        await deleteUserFromDb(userFromDb)
      };
      setAuthUser(undefined);
      setUserFromDb(undefined);
      setAuthState("default");
    } catch (error: any) {
      Alert.alert("error deleting authenticated user ", error.message);
    }
  }

  async function handleResetPassword(username: string): Promise<ResetPasswordOutput | undefined> {
    setisAuthLoading(true);
    try {
      const output = await resetPassword({ username });
      return output;
    } catch (error: any) {
      setisAuthLoading(false);
      Alert.alert("error when trying to reset password: ", error.message);
    }
  }

  function handleResetPasswordNextSteps(output: ResetPasswordOutput) {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case "CONFIRM_RESET_PASSWORD_WITH_CODE":
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        Alert.alert(`Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`);
        setAuthState("confirmForgotPassword");
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case "DONE":
        Alert.alert("Successfully reset password. You can sign in now");
        setisAuthLoading(false);
        setAuthState("signIn");
        break;
    }
  }
  async function handleConfirmResetPassword({
    username,
    confirmationCode,
    newPassword,
  }: ConfirmResetPasswordInput) {
    try {
      await confirmResetPassword({ username, confirmationCode, newPassword });
      Alert.alert("Successfully reset password. You can sign in now");
      setisAuthLoading(false);
      setAuthState("signIn");
    } catch (error: any) {
      console.log(error);
      Alert.alert("error when trying to confirm password reset: ", error.message);
      setisAuthLoading(false);
    }
  }
  
  useEffect(() => {
    getLoggedInUser();
  }, []);
  return (
    <AuthenticationContext.Provider
      value={{
        authUser,
        userFromDb,
        authState,
        isAuthLoading,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        handleUserDelete,
        handleSignUpConfirmation,
        setAuthState,
        setUserFromDb,
        setAuthUser,
        getLoggedInUser,
        getLoggedInUserFromDb,
        handleResetPassword,
        handleResetPasswordNextSteps,
        handleConfirmResetPassword,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
export { AuthenticationProvider, useAuthenticationContext };
