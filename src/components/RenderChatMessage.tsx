import React, { FC } from "react";
import { ThemedView } from "../../themes/theme";
import CustomText from "./CustomText";
import { Message } from "../API";
import { useAuthenticationContext } from "../context/AuthContext";
import { Image, StyleSheet, useColorScheme } from "react-native";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import scheme from "../../themes/colors";

type RenderChatMessageProps = {
    message: Message
}

const backUpProfile = "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const RenderChatMessage: FC<RenderChatMessageProps> = ({ message }) => {
    const { userFromDb } = useAuthenticationContext();
    const theme = useColorScheme();
    const isOwnMessage = (userFromDb && message.author && (userFromDb.id === message.author.id)) ? true : false;
    return (
        <ThemedView style={isOwnMessage ? { paddingRight: 0, marginVertical: 10} : styles.otherPersonMessageContainer}>
            {!isOwnMessage && message && message.author && <Image style={styles.profile} source={{ uri: message.author.profilePicture ? message.author.profilePicture : backUpProfile }} />}
            <ThemedView>
                <LinearGradient style={{ padding: 10, borderRadius: 10 }} colors={isOwnMessage ? [scheme[theme ? theme : "light"].messageFrom, scheme[theme ? theme : "light"].messageTo] : [scheme[theme ? theme : "light"].text + "10", scheme[theme ? theme : "light"].text + "10"]}>
                    {message && <CustomText type="body" style={isOwnMessage && { color: "#fff"}}>{message.content}</CustomText>}
                </LinearGradient>
                {message && <CustomText type="caption" style={[{marginTop: 2, marginRight: 2, opacity : 0.5}, isOwnMessage && {textAlign: "right"}]}>{moment(message.createdAt).fromNow()}</CustomText>}
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    otherPersonMessageContainer: {
        flexDirection: "row",
        paddingLeft: 0,
        marginVertical: 10,
    },
    profile: {
        width: 30,
        height: 30,
        borderRadius: 15,
    }
});

export default RenderChatMessage;