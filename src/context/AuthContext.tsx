import { ReactElement, ReactNode, createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import {
  signUp,
  signIn,
  type SignInInput,
  confirmSignUp,
  type ConfirmSignUpInput,
  getCurrentUser,
  AuthUser,
  signOut,
} from "aws-amplify/auth";
import { AuthStates, SignUpParameters } from "../utils/types";

type authenticationContextType = {
  authUser: AuthUser | null | undefined;
  authState: AuthStates;
  isAuthLoading: boolean;
  handleSignIn: ({ username, password }: SignInInput) => void;
  handleSignOut: () => void;
  handleSignUp: ({ username, password }: SignUpParameters) => void;
  handleSignUpConfirmation: ({ username, confirmationCode }: ConfirmSignUpInput) => void;
  setAuthState: React.Dispatch<React.SetStateAction<AuthStates>>;
  setAuthUser: React.Dispatch<any>;
  getLoggedInUser: () => Promise<AuthUser>;
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
  const [authUser, setAuthUser] = useState<AuthUser | null | undefined>();
  const [authState, setAuthState] = useState<AuthStates>("default");
  const [isAuthLoading, setisAuthLoading] = useState<boolean>(false);
  async function handleSignUp({ username, password }: SignUpParameters) {
    setisAuthLoading(true);
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email: username,
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

  const getLoggedInUser = async () => {
    const currentUser = await getCurrentUser();
    setAuthUser(currentUser);
    return currentUser;
  };

  async function handleSignIn({ username, password }: SignInInput) {
    setisAuthLoading(true);
    try {
      const { isSignedIn, nextStep } = await signIn({
        username,
        password,
        options: { authFlowType: "USER_PASSWORD_AUTH" },
      });
      Alert.alert("User signed in");
      setAuthState("signedIn");
      setisAuthLoading(false);
      const user = await getCurrentUser();
      setAuthUser(user);
    } catch (error: any) {
      Alert.alert("error signing in", error.message);
      console.log(error);
      setisAuthLoading(false);
    }
  }

  async function handleSignUpConfirmation({ username, confirmationCode }: ConfirmSignUpInput) {
    setisAuthLoading(true);
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode,
      });
      Alert.alert("User credentials confirmed, you can sign in now");
      setAuthState("signIn");
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
      setAuthState("signIn");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <AuthenticationContext.Provider
      value={{
        authUser,
        authState,
        isAuthLoading,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        handleSignUpConfirmation,
        setAuthState,
        setAuthUser,
        getLoggedInUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
export { AuthenticationProvider, useAuthenticationContext };
