export type SignUpParameters = {
  username: string;
  password: string;
};

export type AuthStates =
  | "default"
  | "signIn"
  | "signUp"
  | "signedIn"
  | "confirmSignUp"
  | "forgotPassword"
  | "confirmForgotPassword";

export type AppNavigatorParams = {
  Home: undefined;
  Profile: undefined;
};

export type AuthUser = {
  username: string;
  userId: string;
  signInDetails: any;
};
