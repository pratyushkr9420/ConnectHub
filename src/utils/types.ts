import { NavigatorScreenParams } from "@react-navigation/native";

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

export type HomeStackPrams = {
  Home: undefined;
  OnBoarding: undefined;
};

export type AppNavigatorParams = {
  HomeStack: NavigatorScreenParams<HomeStackPrams>;
  Chats: undefined;
  Profile: undefined;
};

export type AuthUser = {
  username: string;
  userId: string;
  signInDetails: any;
};
