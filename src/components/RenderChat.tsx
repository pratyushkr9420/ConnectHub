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
    
    const markAsRead = chat!.chatRoom.isSeenBy ? chat!.chatRoom.isSeenBy.includes(userFromDb!.id) : false;
    return (
        <TouchableOpacity onPress={() => {
            if (otherParticipant) {
                navigation.navigate("ChatRoom", { participant: otherParticipant, chatRoomID: chat?.chatRoomId })
            } else {
                    Alert.alert("This user has left the conversation")
                }
            }
        }>
            <ThemedView style={[styles.postContainer, { borderBottomColor: scheme[theme ? theme : "light"].text + "80" }]}>
                <View style={[styles.dot,{ backgroundColor: markAsRead ? "transparent" : scheme['light'].tabIconSelected}]}/>
                <ThemedView style={[styles.chatConatiner]}>
                    {otherParticipant && <Image style={styles.profileImage} source={otherParticipant?.profilePicture ? { uri: otherParticipant?.profilePicture ? otherParticipant.profilePicture : backUpProfile }: require("../../assets/smilingwomen.jpg")} />}
                    <ThemedView>
                        {otherParticipant && <CustomText type="caption" style={{fontWeight: 600}}>{otherParticipant.firstName} {otherParticipant.lastName}</CustomText>}
                        {chat && <CustomText type="caption" style={{ fontSize: 16 }}>{chat.chatRoom.lastMessage?.content?.slice(0, 40)}</CustomText>}
                        <CustomText type="caption" style={styles.lastMessageText}>{moment(chat?.chatRoom.lastMessage?.createdAt).fromNow()}</CustomText>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    postContainer: {
        paddingVertical: 10,
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
        right: 18,
        top: 15,
    },
    lastMessageText: {
        textAlign: "right",
        fontSize: 10,
        marginRight: 15,
    }
});

export default RenderChat;