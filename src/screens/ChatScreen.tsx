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

type ChatScreenProps = {
  navigation: NativeStackNavigationProp<ChatsStackPrams, "Chats">;
}

const ChatScreen : FC <ChatScreenProps>= ({ navigation }) => {
  const theme = useColorScheme();
  const { setUpChatRooms, chatRooms } = useChatsContext();
  
  useEffect(() => {
    setUpChatRooms();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <FlashList
          data={chatRooms}
          renderItem={({ item }) => <RenderChat navigation={navigation} chat={item}/>}
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
