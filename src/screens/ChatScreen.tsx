import React, { FC, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { StatusBar, useColorScheme, StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";
import { useAuthenticationContext } from "../context/AuthContext";
import { useChatsContext } from "../context/ChatsContext";
import { FlashList } from "@shopify/flash-list";
import ListHeader from "../components/ListHeader";
import RenderChat from "../components/RenderChat";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatsStackPrams } from "../utils/types";
import { generateClient } from "aws-amplify/api";
import { onCreateChatRoom, onCreateUserChatRooms } from "../graphql/subscriptions";

type ChatScreenProps = {
  navigation: NativeStackNavigationProp<ChatsStackPrams, "Chats">;
}

const client = generateClient();

const ChatScreen : FC <ChatScreenProps>= ({ navigation }) => {
  const theme = useColorScheme();
  const { setUpChatRooms, chatRooms } = useChatsContext();
  const { getLoggedInUserFromDb } = useAuthenticationContext();
  
  useEffect(() => {
    setUpChatRooms();
  }, [chatRooms])

  useEffect(() => {
    client.graphql({
      query: onCreateChatRoom,
    }).subscribe({
      next: async ({ data }) => {
        console.log(data);
        setTimeout(async () => {
          await getLoggedInUserFromDb();
          await setUpChatRooms();
        }, 1000);
      },
      error: (error) => console.log(error)
    })
  },[])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, paddingHorizontal: 0}}>
        <FlashList
          data={chatRooms}
          renderItem={({ item }) => <RenderChat navigation={navigation} chat={item}/>}
          estimatedItemSize={200}
          contentContainerStyle={{paddingRight: 5}}
          ListHeaderComponent={<ListHeader title="Chats" iconName="add-circle-sharp" onPressHandler={() => navigation.navigate("CreateChat")}/>}
        />
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default ChatScreen;
