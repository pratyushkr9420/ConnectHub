import React, { FC, useState } from "react";
import { ThemedView } from "../../themes/theme";
import { TextInput, useColorScheme, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import scheme from "../../themes/colors";
import { useAuthenticationContext } from "../context/AuthContext";
import { createMessage, updateChatRoom } from "../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { Message } from "../API";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatsStackPrams } from "../utils/types";

type ChatNewMessageInputProps = {
    chatRoomID: string | undefined;
    participantToken?: string | null | undefined;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    navigation: NativeStackNavigationProp<ChatsStackPrams, "ChatRoom">
}

const client = generateClient();

const ChatNewMessageInput: FC <ChatNewMessageInputProps>= ({ chatRoomID, participantToken, navigation, setMessages }) => {
    const [newMessageContent, setNewMessageContent] = useState("");
    const theme = useColorScheme();
    const { userFromDb } = useAuthenticationContext();

    async function sendPushNotification(pushNotificationToken: string) {
        if (userFromDb) {
            const message = {
                to: pushNotificationToken,
                sound: "default",
                title: `${userFromDb.firstName ? userFromDb.firstName : ""} ${userFromDb.lastName ? userFromDb.lastName : ""}`,
                body: newMessageContent,
                data: { someData: 'goes here' },
              };
            
              await fetch('https://exp.host/--/api/v2/push/send', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Accept-encoding': 'gzip, deflate',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
              });
        }
    }

    const handleCreateNewMessage = async () => {
        if (userFromDb && chatRoomID) {
            try {
                const newMessageResponse = await client.graphql({
                    query: createMessage,
                    variables: {
                      input: {
                        content: newMessageContent.trim(),
                        chatRoomID,
                        messageAuthorId: userFromDb.id,
                        chatRoomMessagesId: chatRoomID    
                      },
                    },
                });
                const updateResponse = client.graphql({
                    query: updateChatRoom,
                    variables: {
                        input: {
                            id: chatRoomID,
                            chatRoomLastMessageId: newMessageResponse.data.createMessage.id,
                            isSeenBy: [userFromDb.id],
                        }
                    }
                })
                if (participantToken) {
                    await sendPushNotification(participantToken);
                }
                console.log("Message successfully send and chatroom updated")
                setMessages(prev => [newMessageResponse.data.createMessage as Message,...prev])
                navigation.navigate("Chats");
                setNewMessageContent("");
            } catch (e) {
                console.log("Error while creating new message or while updating chat room", e);
            }
        } else {
            if (!userFromDb) {
                Alert.alert("Invalid or missing chatroom")
            } else if (!chatRoomID) {
                Alert.alert("Invalid or missing chat room")
            }
        }
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
                value={newMessageContent}
                onChangeText={setNewMessageContent}
            />
            <TouchableOpacity disabled={newMessageContent.trim().length === 0} onPress={handleCreateNewMessage}>
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
        paddingVertical: 10,
        flexShrink: 1,
        borderWidth: 1,
    }
})

export default ChatNewMessageInput;