/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  profilePicture?: string | null,
  email?: string | null,
  status?: string | null,
  notificationToken?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  notificationToken?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  profilePicture?: string | null,
  email?: string | null,
  status?: string | null,
  notificationToken?: string | null,
  chatRooms?: ModelUserChatRoomsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserChatRoomsConnection = {
  __typename: "ModelUserChatRoomsConnection",
  items:  Array<UserChatRooms | null >,
  nextToken?: string | null,
};

export type UserChatRooms = {
  __typename: "UserChatRooms",
  id: string,
  userId: string,
  chatRoomId: string,
  user: User,
  chatRoom: ChatRoom,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  isSeenBy?: Array< string | null > | null,
  messages?: ModelMessageConnection | null,
  lastMessage?: Message | null,
  participants?: ModelUserChatRoomsConnection | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  chatRoomLastMessageId?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  chatRoomID: string,
  author?: User | null,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  chatRoomMessagesId?: string | null,
  messageAuthorId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  profilePicture?: string | null,
  email?: string | null,
  status?: string | null,
  notificationToken?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  isSeenBy?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  chatRoomLastMessageId?: string | null,
};

export type ModelChatRoomConditionInput = {
  isSeenBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  isSeenBy?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  chatRoomLastMessageId?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  type?: string | null,
  content?: string | null,
  numberOfLikes?: number | null,
  likedBy?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  postAuthorId?: string | null,
};

export type ModelPostConditionInput = {
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  numberOfLikes?: ModelIntInput | null,
  likedBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  postAuthorId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  type?: string | null,
  author?: User | null,
  content?: string | null,
  numberOfLikes?: number | null,
  likedBy?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  postAuthorId?: string | null,
};

export type UpdatePostInput = {
  id: string,
  type?: string | null,
  content?: string | null,
  numberOfLikes?: number | null,
  likedBy?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  postAuthorId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  chatRoomID: string,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  chatRoomMessagesId?: string | null,
  messageAuthorId?: string | null,
};

export type ModelMessageConditionInput = {
  chatRoomID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  chatRoomMessagesId?: ModelIDInput | null,
  messageAuthorId?: ModelIDInput | null,
};

export type UpdateMessageInput = {
  id: string,
  chatRoomID?: string | null,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  chatRoomMessagesId?: string | null,
  messageAuthorId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateUserChatRoomsInput = {
  id?: string | null,
  userId: string,
  chatRoomId: string,
};

export type ModelUserChatRoomsConditionInput = {
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomsConditionInput | null > | null,
  or?: Array< ModelUserChatRoomsConditionInput | null > | null,
  not?: ModelUserChatRoomsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateUserChatRoomsInput = {
  id: string,
  userId?: string | null,
  chatRoomId?: string | null,
};

export type DeleteUserChatRoomsInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  notificationToken?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  isSeenBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  content?: ModelStringInput | null,
  numberOfLikes?: ModelIntInput | null,
  likedBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  postAuthorId?: ModelIDInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  chatRoomMessagesId?: ModelIDInput | null,
  messageAuthorId?: ModelIDInput | null,
};

export type ModelUserChatRoomsFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserChatRoomsFilterInput | null > | null,
  or?: Array< ModelUserChatRoomsFilterInput | null > | null,
  not?: ModelUserChatRoomsFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  notificationToken?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isSeenBy?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  chatRoomMessagesId?: ModelSubscriptionIDInput | null,
  chatRoomLastMessageId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  numberOfLikes?: ModelSubscriptionIntInput | null,
  likedBy?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  postAuthorId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  chatRoomID?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  messageAuthorId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserChatRoomsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  chatRoomId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserChatRoomsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserChatRoomsFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    email?: string | null,
    status?: string | null,
    notificationToken?: string | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    email?: string | null,
    status?: string | null,
    notificationToken?: string | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    email?: string | null,
    status?: string | null,
    notificationToken?: string | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isSeenBy?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      chatRoomID: string,
      content?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomMessagesId?: string | null,
      messageAuthorId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isSeenBy?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      chatRoomID: string,
      content?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomMessagesId?: string | null,
      messageAuthorId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isSeenBy?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      chatRoomID: string,
      content?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomMessagesId?: string | null,
      messageAuthorId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    type?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicture?: string | null,
      email?: string | null,
      status?: string | null,
      notificationToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    numberOfLikes?: number | null,
    likedBy?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    postAuthorId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    type?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicture?: string | null,
      email?: string | null,
      status?: string | null,
      notificationToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    numberOfLikes?: number | null,
    likedBy?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    postAuthorId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    type?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicture?: string | null,
      email?: string | null,
      status?: string | null,
      notificationToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    numberOfLikes?: number | null,
    likedBy?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    postAuthorId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomMessagesId?: string | null,
    messageAuthorId?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomMessagesId?: string | null,
    messageAuthorId?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomMessagesId?: string | null,
    messageAuthorId?: string | null,
  } | null,
};

export type CreateUserChatRoomsMutationVariables = {
  input: CreateUserChatRoomsInput,
  condition?: ModelUserChatRoomsConditionInput | null,
};

export type CreateUserChatRoomsMutation = {
  createUserChatRooms?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isSeenBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserChatRoomsMutationVariables = {
  input: UpdateUserChatRoomsInput,
  condition?: ModelUserChatRoomsConditionInput | null,
};

export type UpdateUserChatRoomsMutation = {
  updateUserChatRooms?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isSeenBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserChatRoomsMutationVariables = {
  input: DeleteUserChatRoomsInput,
  condition?: ModelUserChatRoomsConditionInput | null,
};

export type DeleteUserChatRoomsMutation = {
  deleteUserChatRooms?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isSeenBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    email?: string | null,
    status?: string | null,
    notificationToken?: string | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicture?: string | null,
      email?: string | null,
      status?: string | null,
      notificationToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isSeenBy?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      chatRoomID: string,
      content?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomMessagesId?: string | null,
      messageAuthorId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      isSeenBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomLastMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    type?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicture?: string | null,
      email?: string | null,
      status?: string | null,
      notificationToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    numberOfLikes?: number | null,
    likedBy?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    postAuthorId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      type?: string | null,
      content?: string | null,
      numberOfLikes?: number | null,
      likedBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      postAuthorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomMessagesId?: string | null,
    messageAuthorId?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
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
};

export type GetUserChatRoomsQueryVariables = {
  id: string,
};

export type GetUserChatRoomsQuery = {
  getUserChatRooms?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isSeenBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserChatRoomsQueryVariables = {
  filter?: ModelUserChatRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserChatRoomsQuery = {
  listUserChatRooms?:  {
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
};

export type PostsByDateQueryVariables = {
  type: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByDateQuery = {
  postsByDate?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      type?: string | null,
      content?: string | null,
      numberOfLikes?: number | null,
      likedBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      postAuthorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatRoomID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
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
};

export type UserChatRoomsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByUserIdQuery = {
  userChatRoomsByUserId?:  {
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
};

export type UserChatRoomsByChatRoomIdQueryVariables = {
  chatRoomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByChatRoomIdQuery = {
  userChatRoomsByChatRoomId?:  {
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
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    email?: string | null,
    status?: string | null,
    notificationToken?: string | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    email?: string | null,
    status?: string | null,
    notificationToken?: string | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePicture?: string | null,
    email?: string | null,
    status?: string | null,
    notificationToken?: string | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isSeenBy?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      chatRoomID: string,
      content?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomMessagesId?: string | null,
      messageAuthorId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isSeenBy?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      chatRoomID: string,
      content?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomMessagesId?: string | null,
      messageAuthorId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isSeenBy?: Array< string | null > | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      chatRoomID: string,
      content?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomMessagesId?: string | null,
      messageAuthorId?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelUserChatRoomsConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    type?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicture?: string | null,
      email?: string | null,
      status?: string | null,
      notificationToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    numberOfLikes?: number | null,
    likedBy?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    postAuthorId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    type?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicture?: string | null,
      email?: string | null,
      status?: string | null,
      notificationToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    numberOfLikes?: number | null,
    likedBy?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    postAuthorId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    type?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      profilePicture?: string | null,
      email?: string | null,
      status?: string | null,
      notificationToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    numberOfLikes?: number | null,
    likedBy?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    postAuthorId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomMessagesId?: string | null,
    messageAuthorId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomMessagesId?: string | null,
    messageAuthorId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
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
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    chatRoomMessagesId?: string | null,
    messageAuthorId?: string | null,
  } | null,
};

export type OnCreateUserChatRoomsSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomsFilterInput | null,
};

export type OnCreateUserChatRoomsSubscription = {
  onCreateUserChatRooms?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isSeenBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserChatRoomsSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomsFilterInput | null,
};

export type OnUpdateUserChatRoomsSubscription = {
  onUpdateUserChatRooms?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isSeenBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserChatRoomsSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomsFilterInput | null,
};

export type OnDeleteUserChatRoomsSubscription = {
  onDeleteUserChatRooms?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isSeenBy?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
