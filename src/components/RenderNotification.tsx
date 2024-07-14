import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import { ThemedView } from "../../themes/theme";
import CustomText from "./CustomText";
import { useColorScheme, StyleSheet, Image, View, TouchableOpacity, Alert } from "react-native";
import scheme from "../../themes/colors";
import { generateClient } from "aws-amplify/api";
import { NotificationStackParams } from "../utils/types";
import { useAuthenticationContext } from "../context/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from '@expo/vector-icons';
import { Notification, NotificationType } from "../API";
import { useNotificationsContext } from "../context/NotificationsContext";

type RenderNotificationProps = {
    notification: Notification,
    navigation: NativeStackNavigationProp<NotificationStackParams, "Notifications">;
}
const backUpProfile = "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const RenderNotification: FC<RenderNotificationProps> = ({ navigation, notification }) => {
    const theme = useColorScheme();
    const { deleteNotification } = useNotificationsContext();
    const notificationBody = notification.type === NotificationType.LIKED_POST ? "Liked your post" : "Started a conversation with you"
    const handleDeleteNotificationPress = async () => {
        if (notification) {
            Alert.alert("Are you sure you want to remove this notification",
                "Click on cancel to abort this action, or click confirm to delete this notification",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Pressed cancel on deleting notification"),
                        style: "cancel"
                    },
                    {
                        text: "Confirm",
                        onPress: async () => await deleteNotification(notification),
                        style: "destructive"
                    }
                ]
            )
        }
    }
    return (
        <TouchableOpacity onPress={() => {
            if (notification.type === NotificationType.LIKED_POST) {
                navigation.navigate("ShowPost", { postID: notification.postID });
            } else if (notification.type === NotificationType.STARTED_CONVERSATION) {
                navigation.navigate("ChatRoom", { participant: notification.sender, chatRoomID: notification.chatRoomID});
            }
        }}>
            <ThemedView style={[styles.notificationContainer, { borderBottomColor: scheme[theme ? theme : "light"].text + "80" }]}>
                <View style={[styles.dot,{ backgroundColor: notification.isSeen ? "transparent" : scheme['light'].tabIconSelected}]}/>
                <ThemedView style={[styles.notificationDetailsConatiner]}>
                    {notification.sender && <Image style={styles.profileImage} source={{ uri: notification.sender.profilePicture ? notification.sender.profilePicture: backUpProfile }} />}
                    <ThemedView>
                        {notification.sender && <CustomText type="caption" style={{fontWeight: 600}}>{notification.sender.firstName} {notification.sender.lastName}</CustomText>}
                        {notification && <CustomText type="caption" style={{ fontSize: 16 }}>{notificationBody}</CustomText>}
                    </ThemedView>
                </ThemedView>
            </ThemedView>
            <TouchableOpacity style={styles.deleteIcon}>
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={24}
                        color={scheme[theme? theme:"light"].text + "70"}
                        onPress={handleDeleteNotificationPress}
                    />
            </TouchableOpacity>
            <CustomText type="caption" style={styles.notificationTimeText}>{moment(notification.createdAt).fromNow()}</CustomText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    notificationContainer: {
        paddingHorizontal: 10,
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
    notificationDetailsConatiner: {
        flexDirection: "row",
        alignItems: "center",
    },
    deleteIcon: {
        position: "absolute",
        right: 5,
        top: 15,
    },
    notificationTimeText: {
        position: "absolute",
        bottom: 15,
        right: 5,
        textAlign: "right",
        fontSize: 10,
    },
});

export default RenderNotification;