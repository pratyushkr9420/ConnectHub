export type SignUpParameters = {
  username: string;
  password: string;
};

export type AuthStates = "signIn" | "signUp" | "signedIn" | "confirmSignUp";

export type AppNavigatorParams = {
  Home: undefined;
  Profile: undefined;
};

export type AuthUser = {
  username: string;
  userId: string;
  signInDetails: any;
};
