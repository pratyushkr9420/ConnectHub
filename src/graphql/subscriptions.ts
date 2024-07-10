/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateChatRoom = /* GraphQL */ `subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onCreateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatRoomSubscriptionVariables,
  APITypes.OnCreateChatRoomSubscription
>;
export const onUpdateChatRoom = /* GraphQL */ `subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onUpdateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatRoomSubscriptionVariables,
  APITypes.OnUpdateChatRoomSubscription
>;
export const onDeleteChatRoom = /* GraphQL */ `subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onDeleteChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatRoomSubscriptionVariables,
  APITypes.OnDeleteChatRoomSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateUserChatRooms = /* GraphQL */ `subscription OnCreateUserChatRooms(
  $filter: ModelSubscriptionUserChatRoomsFilterInput
) {
  onCreateUserChatRooms(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserChatRoomsSubscriptionVariables,
  APITypes.OnCreateUserChatRoomsSubscription
>;
export const onUpdateUserChatRooms = /* GraphQL */ `subscription OnUpdateUserChatRooms(
  $filter: ModelSubscriptionUserChatRoomsFilterInput
) {
  onUpdateUserChatRooms(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserChatRoomsSubscriptionVariables,
  APITypes.OnUpdateUserChatRoomsSubscription
>;
export const onDeleteUserChatRooms = /* GraphQL */ `subscription OnDeleteUserChatRooms(
  $filter: ModelSubscriptionUserChatRoomsFilterInput
) {
  onDeleteUserChatRooms(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserChatRoomsSubscriptionVariables,
  APITypes.OnDeleteUserChatRoomsSubscription
>;
