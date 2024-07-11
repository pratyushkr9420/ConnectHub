import React, { FC, useState } from "react";
import { ThemedView } from "../../themes/theme";
import { TextInput, useColorScheme, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import scheme from "../../themes/colors";

type ChatNewMessageInputProps = {
    chatRoomID: string | undefined,
}

const ChatNewMessageInput: FC <ChatNewMessageInputProps>= ({ chatRoomID }) => {
    const [newMessage, setNewMessage] = useState("");
    const theme = useColorScheme();
    const handleCreateNewMessage = async () => {
        Alert.alert("Created new message");
    }
    return (
        <ThemedView style={[styles.chatContainer]}>
            <TextInput
                style={[styles.input,
                    { backgroundColor: theme === "dark" ? "#000" : "#fff" },
                    { color: scheme[theme ? theme : "light"].text },
                    { borderColor: scheme[theme ? theme : "light"].text + 50}
                ]}
                placeholder="Enter your message here..."
                placeholderTextColor={scheme[theme ? theme : "light"].text + "50"}
                multiline
            />
            <TouchableOpacity onPress={handleCreateNewMessage}>
                <FontAwesome name="send" size={24} color={scheme[theme? theme:"light"].text} />
            </TouchableOpacity>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    chatContainer: {
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 18,
        gap: 10,
    },
    input: {
        minWidth: "95%",
        borderRadius: 18,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexShrink: 1,
        borderWidth: 1,
    }
})

export default ChatNewMessageInput;