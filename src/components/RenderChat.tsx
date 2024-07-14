import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import { ThemedView } from "../../themes/theme";
import CustomText from "./CustomText";
import { useColorScheme, StyleSheet, Image, View, Touchable, TouchableOpacity, Alert  } from "react-native";
import scheme from "../../themes/colors";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../graphql/queries";
import { ChatRoomItem, ChatsStackPrams } from "../utils/types";
import { useAuthenticationContext } from "../context/AuthContext";
import { User } from "../API";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from '@expo/vector-icons';
import { useChatsContext } from "../context/ChatsContext";

const client = generateClient();

const backUpProfile = "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type ChatProps = {
    chat: ChatRoomItem | null;
    navigation: NativeStackNavigationProp<ChatsStackPrams, "Chats">;
}

const RenderChat: FC<ChatProps> = ({ chat, navigation}) => {
    const theme = useColorScheme();
    const { userFromDb } = useAuthenticationContext();
    const [otherParticipant, setOtherParticipant] = useState<User | null | undefined>();
    const { removeChatRoom } = useChatsContext();
    const fetchOtherParticpant = async () => {
        const participantsId = chat?.chatRoom.participants!.items.map((user) => user?.userId);
        const otherParticipantId = userFromDb!.id === participantsId![0] ? participantsId![1] : participantsId![0];
        const response = await client.graphql({
            query: getUser,
            variables: { id: otherParticipantId as string},
        });
        setOtherParticipant(response.data.getUser as User);
    }
    useEffect(() => {
        fetchOtherParticpant();
    }, [chat])

    const handleDeletePress = async () => {
        if (chat) {
            Alert.alert("Are you sure you want to leave conversation",
                "Click on cancel to abort this action, or click confirm to delete this conversation",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Pressed cancel on deleting conversation"),
                        style: "cancel"
                    },
                    {
                        text: "Confirm",
                        onPress: async () => await removeChatRoom(chat),
                        style: "destructive"
                    }
                ]
            )
        }
    }
    const markAsRead = chat!.chatRoom.isSeenBy ? chat!.chatRoom.isSeenBy.includes(userFromDb!.id) : false;
    return (
        <TouchableOpacity onPress={() => {
                navigation.navigate("ChatRoom", { participant: otherParticipant, chatRoomID: chat?.chatRoomId })
            }
        }>
            <ThemedView style={[styles.chatContainer, { borderBottomColor: scheme[theme ? theme : "light"].text + "80" }]}>
                <View style={[styles.dot,{ backgroundColor: markAsRead ? "transparent" : scheme['light'].tabIconSelected}]}/>
                <ThemedView style={[styles.chatConatiner]}>
                    {otherParticipant && <Image style={styles.profileImage} source={otherParticipant?.profilePicture ? { uri: otherParticipant?.profilePicture ? otherParticipant.profilePicture : backUpProfile }: require("../../assets/smilingwomen.jpg")} />}
                    <ThemedView>
                        {otherParticipant && <CustomText type="caption" style={{fontWeight: 600}}>{otherParticipant.firstName} {otherParticipant.lastName}</CustomText>}
                        {chat && <CustomText type="caption" style={{ fontSize: 16 }}>{chat.chatRoom.lastMessage ? chat.chatRoom.lastMessage?.content?.slice(0, 40) : "Start conversation in this chatroom"}</CustomText>}
                    </ThemedView>
                </ThemedView>
            </ThemedView>
            <TouchableOpacity style={styles.deleteIcon}>
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={24}
                        color={scheme[theme? theme:"light"].text + "70"}
                        onPress={handleDeletePress}
                    />
            </TouchableOpacity>
            <CustomText type="caption" style={styles.lastMessageText}>{moment(chat?.chatRoom.lastMessage?.createdAt).fromNow()}</CustomText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    chatContainer: {
        paddingHorizontal: 1,
        paddingVertical: 15,
        borderBottomWidth: 1,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3, 
    },
    chatConatiner: {
        flexDirection: "row",
        alignItems: "center",
    },
    deleteIcon: {
        position: "absolute",
        right: 2,
        top: 15,
    },
    lastMessageText: {
        position: "absolute",
        bottom: 15,
        right: 5,
        textAlign: "right",
        fontSize: 10,
    },
});

export default RenderChat;