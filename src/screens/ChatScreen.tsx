import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { StatusBar, useColorScheme } from "react-native";

const ChatScreen = () => {
  const theme = useColorScheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <CustomText type="title">Chats</CustomText>
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default ChatScreen;
