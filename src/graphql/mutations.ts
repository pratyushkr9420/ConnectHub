/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    profilePicture
    email
    status
    notificationToken
    latitude
    longitude
    chatRooms {
      items {
        id
        userId
        chatRoomId
        user {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        chatRoom {
          id
          isSeenBy
          messages {
            items {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            chatRoomID
            author {
              id
              firstName
              lastName
              profilePicture
              email
              status
              notificationToken
              latitude
              longitude
              createdAt
              updatedAt
              __typename
            }
            content
            createdAt
            updatedAt
            chatRoomMessagesId
            messageAuthorId
            __typename
          }
          participants {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    profilePicture
    email
    status
    notificationToken
    latitude
    longitude
    chatRooms {
      items {
        id
        userId
        chatRoomId
        user {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        chatRoom {
          id
          isSeenBy
          messages {
            items {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            chatRoomID
            author {
              id
              firstName
              lastName
              profilePicture
              email
              status
              notificationToken
              latitude
              longitude
              createdAt
              updatedAt
              __typename
            }
            content
            createdAt
            updatedAt
            chatRoomMessagesId
            messageAuthorId
            __typename
          }
          participants {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    profilePicture
    email
    status
    notificationToken
    latitude
    longitude
    chatRooms {
      items {
        id
        userId
        chatRoomId
        user {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        chatRoom {
          id
          isSeenBy
          messages {
            items {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            chatRoomID
            author {
              id
              firstName
              lastName
              profilePicture
              email
              status
              notificationToken
              latitude
              longitude
              createdAt
              updatedAt
              __typename
            }
            content
            createdAt
            updatedAt
            chatRoomMessagesId
            messageAuthorId
            __typename
          }
          participants {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createChatRoom = /* GraphQL */ `mutation CreateChatRoom(
  $input: CreateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  createChatRoom(input: $input, condition: $condition) {
    id
    isSeenBy
    messages {
      items {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
        __typename
      }
      nextToken
      __typename
    }
    lastMessage {
      id
      chatRoomID
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          items {
            id
            userId
            chatRoomId
            user {
              id
              firstName
              lastName
              profilePicture
              email
              status
              notificationToken
              latitude
              longitude
              createdAt
              updatedAt
              __typename
            }
            chatRoom {
              id
              isSeenBy
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      chatRoomMessagesId
      messageAuthorId
      __typename
    }
    participants {
      items {
        id
        userId
        chatRoomId
        user {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        chatRoom {
          id
          isSeenBy
          messages {
            items {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            chatRoomID
            author {
              id
              firstName
              lastName
              profilePicture
              email
              status
              notificationToken
              latitude
              longitude
              createdAt
              updatedAt
              __typename
            }
            content
            createdAt
            updatedAt
            chatRoomMessagesId
            messageAuthorId
            __typename
          }
          participants {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatRoomMutationVariables,
  APITypes.CreateChatRoomMutation
>;
export const updateChatRoom = /* GraphQL */ `mutation UpdateChatRoom(
  $input: UpdateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  updateChatRoom(input: $input, condition: $condition) {
    id
    isSeenBy
    messages {
      items {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
        __typename
      }
      nextToken
      __typename
    }
    lastMessage {
      id
      chatRoomID
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          items {
            id
            userId
            chatRoomId
            user {
              id
              firstName
              lastName
              profilePicture
              email
              status
              notificationToken
              latitude
              longitude
              createdAt
              updatedAt
              __typename
            }
            chatRoom {
              id
              isSeenBy
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      chatRoomMessagesId
      messageAuthorId
      __typename
    }
    participants {
      items {
        id
        userId
        chatRoomId
        user {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        chatRoom {
          id
          isSeenBy
          messages {
            items {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            chatRoomID
            author {
              id
              firstName
              lastName
              profilePicture
              email
              status
              notificationToken
              latitude
              longitude
              createdAt
              updatedAt
              __typename
            }
            content
            createdAt
            updatedAt
            chatRoomMessagesId
            messageAuthorId
            __typename
          }
          participants {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatRoomMutationVariables,
  APITypes.UpdateChatRoomMutation
>;
export const deleteChatRoom = /* GraphQL */ `mutation DeleteChatRoom(
  $input: DeleteChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  deleteChatRoom(input: $input, condition: $condition) {
    id
    isSeenBy
    messages {
      items {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
        __typename
      }
      nextToken
      __typename
    }
    lastMessage {
      id
      chatRoomID
      author {
        id
        firstName
        lastName
        profilePicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          items {
            id
            userId
            chatRoomId
            user {
              id
              firstName
              lastName
              profilePicture
              email
              status
              notificationToken
              latitude
              longitude
              createdAt
              updatedAt
              __typename
            }
            chatRoom {
              id
              isSeenBy
              createdAt
              updatedAt
              chatRoomLastMessageId
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      chatRoomMessagesId
      messageAuthorId
      __typename
    }
    participants {
      items {
        id
        userId
        chatRoomId
        user {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        chatRoom {
          id
          isSeenBy
          messages {
            items {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            nextToken
            __typename
          }
          lastMessage {
            id
            chatRoomID
            author {
              id
              firstName
              lastName
              profilePicture
              email
              status
              notificationToken
              latitude
              longitude
              createdAt
              updatedAt
              __typename
            }
            content
            createdAt
            updatedAt
            chatRoomMessagesId
            messageAuthorId
            __typename
          }
          participants {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    chatRoomLastMessageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatRoomMutationVariables,
  APITypes.DeleteChatRoomMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    type
    author {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    content
    numberOfLikes
    likedBy
    createdAt
    updatedAt
    postAuthorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    type
    author {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    content
    numberOfLikes
    likedBy
    createdAt
    updatedAt
    postAuthorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    type
    author {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    content
    numberOfLikes
    likedBy
    createdAt
    updatedAt
    postAuthorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    chatRoomID
    author {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    content
    createdAt
    updatedAt
    chatRoomMessagesId
    messageAuthorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    chatRoomID
    author {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    content
    createdAt
    updatedAt
    chatRoomMessagesId
    messageAuthorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    chatRoomID
    author {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    content
    createdAt
    updatedAt
    chatRoomMessagesId
    messageAuthorId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createUserChatRooms = /* GraphQL */ `mutation CreateUserChatRooms(
  $input: CreateUserChatRoomsInput!
  $condition: ModelUserChatRoomsConditionInput
) {
  createUserChatRooms(input: $input, condition: $condition) {
    id
    userId
    chatRoomId
    user {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    chatRoom {
      id
      isSeenBy
      messages {
        items {
          id
          chatRoomID
          author {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          content
          createdAt
          updatedAt
          chatRoomMessagesId
          messageAuthorId
          __typename
        }
        nextToken
        __typename
      }
      lastMessage {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
        __typename
      }
      participants {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserChatRoomsMutationVariables,
  APITypes.CreateUserChatRoomsMutation
>;
export const updateUserChatRooms = /* GraphQL */ `mutation UpdateUserChatRooms(
  $input: UpdateUserChatRoomsInput!
  $condition: ModelUserChatRoomsConditionInput
) {
  updateUserChatRooms(input: $input, condition: $condition) {
    id
    userId
    chatRoomId
    user {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    chatRoom {
      id
      isSeenBy
      messages {
        items {
          id
          chatRoomID
          author {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          content
          createdAt
          updatedAt
          chatRoomMessagesId
          messageAuthorId
          __typename
        }
        nextToken
        __typename
      }
      lastMessage {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
        __typename
      }
      participants {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserChatRoomsMutationVariables,
  APITypes.UpdateUserChatRoomsMutation
>;
export const deleteUserChatRooms = /* GraphQL */ `mutation DeleteUserChatRooms(
  $input: DeleteUserChatRoomsInput!
  $condition: ModelUserChatRoomsConditionInput
) {
  deleteUserChatRooms(input: $input, condition: $condition) {
    id
    userId
    chatRoomId
    user {
      id
      firstName
      lastName
      profilePicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    chatRoom {
      id
      isSeenBy
      messages {
        items {
          id
          chatRoomID
          author {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          content
          createdAt
          updatedAt
          chatRoomMessagesId
          messageAuthorId
          __typename
        }
        nextToken
        __typename
      }
      lastMessage {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          email
          status
          notificationToken
          latitude
          longitude
          chatRooms {
            items {
              id
              userId
              chatRoomId
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
        __typename
      }
      participants {
        items {
          id
          userId
          chatRoomId
          user {
            id
            firstName
            lastName
            profilePicture
            email
            status
            notificationToken
            latitude
            longitude
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            isSeenBy
            messages {
              nextToken
              __typename
            }
            lastMessage {
              id
              chatRoomID
              content
              createdAt
              updatedAt
              chatRoomMessagesId
              messageAuthorId
              __typename
            }
            participants {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserChatRoomsMutationVariables,
  APITypes.DeleteUserChatRoomsMutation
>;
