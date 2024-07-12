import React, { FC, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { RouteProp } from "@react-navigation/native";
import { ChatsStackPrams } from "../utils/types";
import { generateClient } from "aws-amplify/api";
import { messagesByChatRoom } from "../graphql/queries";
import { Message, ModelSortDirection } from "../API";
import { KeyboardAvoidingView, Platform, useColorScheme } from "react-native";
import scheme from "../../themes/colors";
import { FlashList } from "@shopify/flash-list";
import ChatNewMessageInput from "../components/ChatNewMessageInput";
import RenderChatMessage from "../components/RenderChatMessage";
import { onCreateMessage } from "../graphql/subscriptions";
import { useAuthenticationContext } from "../context/AuthContext";
import { useChatsContext } from "../context/ChatsContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ChatRoomScreenProps = {
  route: RouteProp<ChatsStackPrams, "ChatRoom">;
  navigation: NativeStackNavigationProp<ChatsStackPrams, "ChatRoom">;
}

const client = generateClient();

const ChatRoomScreen: FC<ChatRoomScreenProps> = ({ route, navigation }) => {
  const theme = useColorScheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const { getLoggedInUserFromDb } = useAuthenticationContext();
  const { setUpChatRooms } = useChatsContext();
  const fetchChatRoomMessages = async () => {
    if (route.params?.chatRoomID) {
      try {
        const response = await client.graphql({
          query: messagesByChatRoom,
          variables: { chatRoomID: route.params!.chatRoomID as string, sortDirection: ModelSortDirection.DESC, limit: 100 },
        });
        setMessages(response.data.messagesByChatRoom.items);
      } catch (e) {
        console.log("Error fetching chats for the chatroom");
      }
    }
  };
  
  useEffect(() => {
    fetchChatRoomMessages();
  }, [route, messages])
  
  useEffect(() => {
    client.graphql({
      query: onCreateMessage
    }).subscribe({
      next: async ({ data }) => {
        console.log(data);
        await getLoggedInUserFromDb();
        await setUpChatRooms();
        await fetchChatRoomMessages();
      },
      error: (error) => console.log(error)
    })
  },[])
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={100}
          style={[{ flex: 1 }, { backgroundColor: scheme[theme ? theme : "light"].background }]}
        >
            <ThemedView style={{ flex: 1 }}>
              {messages && <FlashList
                data={messages}
                renderItem={({ item }) => <RenderChatMessage message={item}/>}
                showsVerticalScrollIndicator={false}
                estimatedItemSize={200}
                inverted
              />}
          </ThemedView>
          <ChatNewMessageInput navigation={navigation} setMessages={setMessages} chatRoomID={route.params?.chatRoomID} participantToken={route.params?.participant?.notificationToken}/>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatRoomScreen;