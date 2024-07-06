import { NavigatorScreenParams } from "@react-navigation/native";
import { AuthUser, FetchUserAttributesOutput } from "aws-amplify/auth";

export type SignUpParameters = {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
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

export type CustomAuthUser = {
  attributes: FetchUserAttributesOutput;
} & AuthUser;

export type UserFromDb = {
  id: string | null;
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  profilePicture?: string | null | undefined;
  email?: string | null | undefined;
  status?: string | null,
  latitude?: string | null,
  longitude?: string | null,
  notificationToken?: string | null,
};
