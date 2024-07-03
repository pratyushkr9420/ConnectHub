import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";

const ChatScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <CustomText type="title">Chats</CustomText>
      </ThemedView>
    </SafeAreaView>
  );
};

export default ChatScreen;
