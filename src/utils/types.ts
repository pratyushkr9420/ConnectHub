import { NavigatorScreenParams } from "@react-navigation/native";
import { AuthUser, FetchUserAttributesOutput } from "aws-amplify/auth";
import { ModelUserChatRoomsConnection, User } from "../API";

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
  CreateNewPost: undefined;
  OnBoarding: undefined;
};

export type ChatsStackPrams = {
  Chats: undefined;
  ChatRoom: { participant: User | null | undefined, chatRoomID: string | undefined } | undefined;
};
 
export type AppNavigatorParams = {
  HomeStack: NavigatorScreenParams<HomeStackPrams>;
  ChatsStack: NavigatorScreenParams<ChatsStackPrams>;
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
  chatRooms?: Array< ChatRoomItem | null >,
};

export type ChatRoomsFromGetUserQuery = Array< ChatRoomItem | null>

export type ChatRoomItem = {
  __typename: "UserChatRooms",
  id: string,
  userId: string,
  chatRoomId: string,
  user:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    email?: string | null,
    status?: string | null,
    notificationToken?: string | null,
    latitude?: string | null,
    longitude?: string | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomsConnection",
      items:  Array< {
        __typename: "UserChatRooms",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  },
  chatRoom:  {
    __typename: "ChatRoom",
    id: string,
    isSeenBy?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        chatRoomID: string,
        content?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        chatRoomMessagesId?: string | null,
        messageAuthorId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      chatRoomID: string,
      author?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        profilePicture?: string | null,
        email?: string | null,
        status?: string | null,
        notificationToken?: string | null,
        latitude?: string | null,
        longitude?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomMessagesId?: string | null,
      messageAuthorId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelUserChatRoomsConnection",
      items:  Array< {
        __typename: "UserChatRooms",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomLastMessageId?: string | null,
  },
  createdAt: string,
  updatedAt: string,
}