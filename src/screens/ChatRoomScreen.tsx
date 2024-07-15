import React, { FC, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { RouteProp } from "@react-navigation/native";
import { ChatsStackPrams } from "../utils/types";
import { generateClient } from "aws-amplify/api";
import { messagesByChatRoom } from "../graphql/queries";
import { Message, ModelSortDirection } from "../API";
import { Alert, Button, KeyboardAvoidingView, Platform, useColorScheme } from "react-native";
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
  const [loadingMessages, setIsLoadingMessages] = useState<boolean>(false);
  const [nextMesagesToken, setNextMessagesToken] = useState<string | null | undefined>(null);
  const { getLoggedInUserFromDb } = useAuthenticationContext();
  const { setUpChatRooms } = useChatsContext();
  const fetchChatRoomMessages = async () => {
    if (route.params?.chatRoomID) {
      setIsLoadingMessages(true);
      try {
        const response = await client.graphql({
          query: messagesByChatRoom,
          variables: { chatRoomID: route.params!.chatRoomID as string, sortDirection: ModelSortDirection.DESC, limit: 150 },
        });
        setMessages(response.data.messagesByChatRoom.items);
        setIsLoadingMessages(false);
        setNextMessagesToken(response.data.messagesByChatRoom.nextToken);
      } catch (e) {
        console.log("Error fetching chats for the chatroom");
        setIsLoadingMessages(false);
      }
    }
  };

  const fetchAdditionalChatRoomMessages = async () => {
    if (nextMesagesToken) {
      setIsLoadingMessages(true);
      try {
        const response = await client.graphql({
          query: messagesByChatRoom,
          variables: { chatRoomID: route.params!.chatRoomID as string, sortDirection: ModelSortDirection.DESC, limit: 150 },
        });
        setMessages((prev) => [...prev, ...response.data.messagesByChatRoom.items]);
        setNextMessagesToken(response.data.messagesByChatRoom.nextToken);
        setIsLoadingMessages(false);
      } catch (e) {
        console.log("Error fetching additional posts");
        setIsLoadingMessages(false);
      }
    } else {
      Alert.alert("No more chats to load");
    }
  }
  
  useEffect(() => {
    fetchChatRoomMessages();
  }, [route, messages])
  
  useEffect(() => {
    client.graphql({
      query: onCreateMessage
    }).subscribe({
      next: async ({ data }) => {
        console.log(data);
        setTimeout(async () => {
          await getLoggedInUserFromDb();
          await setUpChatRooms();
          await fetchChatRoomMessages();
        }, 2000);
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
                refreshing={loadingMessages}
                onRefresh={fetchChatRoomMessages}
                ListHeaderComponent={() => <Button title="See more chats" onPress={fetchAdditionalChatRoomMessages} color={scheme[theme ? theme: "light"].text}/>}
              />}
          </ThemedView>
          <ChatNewMessageInput navigation={navigation} setMessages={setMessages} chatRoomID={route.params?.chatRoomID} participantToken={route.params?.participant?.notificationToken} />
          {(route.params && !route.params.participant) && <CustomText type="body">The other user has left the chat..</CustomText>}
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatRoomScreen;