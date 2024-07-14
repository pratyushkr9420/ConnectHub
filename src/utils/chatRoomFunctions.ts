import { generateClient } from "aws-amplify/api";
import { DeleteUserChatRoomsInput } from "../API";
import { ChatRoomItem } from "./types";
import { createChatRoom, deleteUserChatRooms } from "../graphql/mutations";

const client = generateClient();

export const createChatRoomInDb = async () => {
  try {
    const response = await client.graphql({
      query: createChatRoom,
      variables: {
        input: {
          chatRoomLastMessageId: "",
          isSeenBy: [],
        }
      }
    });
    return response.data.createChatRoom ? response.data.createChatRoom.id : null;
  } catch (e) {
    console.log("Error creating a new chat room",e)
  } 
}

export const deleteUserChatRoomFromDb = async (chatRoomToDelete: ChatRoomItem) => {
    const chatRoomDetails : DeleteUserChatRoomsInput= {
        id: chatRoomToDelete.id,
      };
      try {
        await client.graphql({
          query: deleteUserChatRooms,
          variables: { input: chatRoomDetails }
        })
      } catch (e) {
        console.log('Error removing user from chatroom in database', e);
      }
}