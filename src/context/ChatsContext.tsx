import React, { createContext, ReactElement, ReactNode, useContext, useState } from "react";
import { useAuthenticationContext } from "./AuthContext";
import { generateClient } from "aws-amplify/api";
import { ChatRoomItem, ChatRoomsFromGetUserQuery, UserFromDb } from "../utils/types";
import { createChatRoomInDb, deleteUserChatRoomFromDb } from "../utils/chatRoomFunctions";
import { addUserToChatRoom, getUserFromDbByEmail } from "../utils/userfunctions";
import { Alert } from "react-native";
import { createNotificationInDb, sendPushNotification } from "../utils/notificationsFunctions";
import { NotificationType } from "../API";

type ChatsContextType = {
    chatRooms: ChatRoomsFromGetUserQuery;
    setChatRooms: React.Dispatch<React.SetStateAction<ChatRoomsFromGetUserQuery>>,
    setUpChatRooms: () => Promise<void>;
    removeChatRoom: (chatRoomToDelete: ChatRoomItem) => Promise<void>;
    addChatRoom: (otherUserEmail: string, currentUserFromDb: UserFromDb, handlePress: () => void) => Promise<void>;
    isChatsLoading: boolean;
};

const client = generateClient();

const ChatsContext = createContext<ChatsContextType | undefined>(undefined);

function useChatsContext() {
    const context = useContext(ChatsContext);
    if (context === undefined) {
      throw new Error("useChatsContext must be used within a ChatsProvider");
    }
    return context;
}

function ChatsProvider({ children }: { children: ReactNode }): ReactElement {
    const [chatRooms, setChatRooms] = useState<ChatRoomsFromGetUserQuery>([]);
    const [isChatsLoading, setIsChatsLoading] = useState<boolean>(false);
    const { getLoggedInUserFromDb, userFromDb } = useAuthenticationContext();
    const setUpChatRooms = async () => {
        const currentUserFromDb = await getLoggedInUserFromDb();
        if (currentUserFromDb) {
            setChatRooms(currentUserFromDb.chatRooms ? currentUserFromDb.chatRooms : []);
        }
    }
    const removeChatRoom = async (chatRoomToDelete: ChatRoomItem) => {
        await deleteUserChatRoomFromDb(chatRoomToDelete);
        setChatRooms(chatRooms.filter(chatRoom => chatRoom!.id !== chatRoomToDelete.id));
        await getLoggedInUserFromDb();
        setUpChatRooms();
    }

    const addChatRoom = async (otherUserEmail: string, currentUserFromDb: UserFromDb, handlePress: () => void) => {
        setIsChatsLoading(true);
        try {
            const otherUser = await getUserFromDbByEmail(otherUserEmail);
            if (!otherUser) {
                Alert.alert(`There is no user with the email ${otherUserEmail}`);
                setIsChatsLoading(false);
                return
            }
            setIsChatsLoading(true);
            const newChatRoomId = await createChatRoomInDb();
            if (otherUser && newChatRoomId) {
                await addUserToChatRoom(otherUser.id, newChatRoomId);
            }
            if (currentUserFromDb && currentUserFromDb.id && newChatRoomId) {
                await addUserToChatRoom(currentUserFromDb.id, newChatRoomId);
            }
            await getLoggedInUserFromDb();
            setUpChatRooms();
            setIsChatsLoading(false);
            const notificationData = await createNotificationInDb(currentUserFromDb.id as string, otherUser.id, NotificationType.STARTED_CONVERSATION, '', newChatRoomId as string)
            if (otherUser.notificationToken) {
                await sendPushNotification(otherUser.notificationToken,
                    currentUserFromDb,
                    `${currentUserFromDb.firstName ? currentUserFromDb.firstName : ""} ${currentUserFromDb.lastName ? currentUserFromDb.lastName : ""} 
                    💬 Started a new conversation with you`,notificationData);
            }
            Alert.alert("Success!",
                "Created a new chat room",
                [
                    {
                        text: 'Go to chat room',
                        onPress: handlePress,
                    },
                ]
            )
        } catch (e) {
            console.log("Error creating new chat room", e);
            setIsChatsLoading(false);
        }
    }
    
    return (
        <ChatsContext.Provider value={{
            chatRooms,
            setChatRooms,
            setUpChatRooms,
            removeChatRoom,
            addChatRoom,
            isChatsLoading,
        }}>
            { children }
        </ChatsContext.Provider>
    )
}

export { ChatsProvider, useChatsContext };
