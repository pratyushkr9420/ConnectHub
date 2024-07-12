import React, { createContext, ReactElement, ReactNode, useContext, useState } from "react";
import { useAuthenticationContext } from "./AuthContext";
import { generateClient } from "aws-amplify/api";
import { ChatRoomItem, ChatRoomsFromGetUserQuery } from "../utils/types";

type ChatsContextType = {
    chatRooms: ChatRoomsFromGetUserQuery;
    setChatRooms: React.Dispatch<React.SetStateAction<ChatRoomsFromGetUserQuery>>,
    setUpChatRooms: () => Promise<void>
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
    const { getLoggedInUserFromDb, userFromDb } = useAuthenticationContext();
    const setUpChatRooms = async () => {
        const currentUserFromDb = await getLoggedInUserFromDb();
        if (currentUserFromDb) {
            setChatRooms(currentUserFromDb.chatRooms ? currentUserFromDb.chatRooms : []);
        }
    }
    const removeChatRoom = async (chatRoomToDelete: ChatRoomItem) => {
        setChatRooms(chatRooms.filter(chatRoom => chatRoom!.id !== chatRoomToDelete.id));
    }
    
    return (
        <ChatsContext.Provider value={{
            chatRooms,
            setChatRooms,
            setUpChatRooms,
        }}>
            { children }
        </ChatsContext.Provider>
    )
}

export { ChatsProvider, useChatsContext };
