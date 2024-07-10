import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { StatusBar, useColorScheme } from "react-native";
import { useAuthenticationContext } from "../context/AuthContext";
import { useChatsContext } from "../context/ChatsContext";
import { FlashList } from "@shopify/flash-list";
import ListHeader from "../components/ListHeader";
import RenderChat from "../components/RenderChat";

const ChatScreen = () => {
  const theme = useColorScheme();
  const { userFromDb } = useAuthenticationContext();
  const { setUpChatRooms, chatRooms } = useChatsContext();
  
  useEffect(() => {
    setUpChatRooms();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <FlashList
          data={chatRooms}
          renderItem={({ item }) => <RenderChat chat={item}/>}
          estimatedItemSize={200}
          contentContainerStyle={{paddingRight: 5}}
          ListHeaderComponent={<ListHeader title="Chats" iconName="add-circle-sharp" onPressHandler={() => {}}/>}
        />
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default ChatScreen;
