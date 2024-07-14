import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import { ThemedView } from "../../themes/theme";
import CustomText from "./CustomText";
import { NotificationType, Post, User } from "../API";
import { useAuthenticationContext } from "../context/AuthContext";
import { useColorScheme, StyleSheet, Image, TouchableOpacity, Alert, Linking, Button } from "react-native";
import scheme from "../../themes/colors";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../graphql/queries";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { usePostsContext } from "../context/PostsContext";
import * as Haptics from 'expo-haptics';
import { send, EmailJSResponseStatus } from '@emailjs/react-native';
import { createNotificationInDb } from "../utils/notificationsFunctions";
import { sendPushNotification } from "../utils/notificationsFunctions";
import { KEY, SERVICE_ID, TEMPLATE_ID } from "@env";

const client = generateClient();

const backUpProfile = "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
type PostProps = {
    post: Post;
}

const RenderPost: FC<PostProps> = ({ post }) => {
    const { userFromDb, getLoggedInUserFromDb } = useAuthenticationContext();
    const { incrementLikesOnPost, decrementLikesOnPost, removePost } = usePostsContext();
    const [author, setAuthor] = useState<User | null | undefined>();
    const theme = useColorScheme();
    
    const fetchPostAuthor = async () => {
        if (post && post.postAuthorId) {
            const response = await client.graphql({
                query: getUser,
                variables: { id: post.postAuthorId },
            });
            setAuthor(response.data.getUser as User);
        }
    }

    const sendReportEmail = async () => {
        try {
            await send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                  name:`${userFromDb!.firstName} ${userFromDb!.lastName}`,
                  post_id: post.id,
                  user_id: userFromDb!.id,
                  message: `Post with postId: ${post.id} created by the user with userId: ${post.postAuthorId} was reported by user with userId: ${userFromDb!.id}`,
                },
                {
                  publicKey: KEY,
                },
              );
           Alert.alert("Thank you for your report. We will review it as soon as possible.")
        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
              console.log('EmailJS Request Failed...', err);
            }
      
            console.log('ERROR', err);
          }
        // alert("Thank you for your report. We will review it as soon as possible.");
    }

    const toggleLikePress = async () => {
        if (post && post.likedBy && userFromDb && author) {
            if (post.likedBy.includes(userFromDb.id)) {
                await decrementLikesOnPost(post, userFromDb);
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            } else {
                await incrementLikesOnPost(post, userFromDb)
                if (author.id === userFromDb.id) {
                    const notificationData = {
                        userID: userFromDb.id,
                        authorID: author.id,
                        type: NotificationType.LIKED_POST,
                        postID: post.id
                    };
                    await sendPushNotification(author.notificationToken as string, userFromDb, `${userFromDb.firstName} liked your post 👍🏼`, notificationData)
                    await createNotificationInDb(userFromDb.id as string, author.id,NotificationType.LIKED_POST, post.id,'');
                }
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }
        } else {
            Alert.alert("Toggle doesn't work when missing post or missing user in database")
        }
    }

    const handleReportIconPress = async () => {
        Alert.alert(
            "Do you want to report this post by the user",
            "Is so press confirm, else you can abort this action by pressing cancel",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Presed cancel on reporting user"),
                    style:"cancel"
                },
                {
                    text: "Confirm",
                    onPress: async () => await sendReportEmail(),
                    style:"destructive"
                }
            ]
        )
    }
    useEffect(() => {
        fetchPostAuthor();
        getLoggedInUserFromDb();
    }, [post])
    return (
        <ThemedView style={[styles.postContainer, { borderBottomColor: scheme[theme ? theme : "light"].text + "80" }]}>
            <ThemedView style={styles.profileImageDetailsContainer}>
                {author && <Image style={styles.profileImage} source={author.profilePicture ? { uri: author.profilePicture ? author.profilePicture : backUpProfile }: require("../../assets/smilingwomen.jpg")} />}
                <ThemedView>
                    {author && <CustomText type="body">{author.firstName}</CustomText>}
                    <CustomText type="caption">{moment(post.createdAt).fromNow()}</CustomText>
                </ThemedView>
            </ThemedView>
            <ThemedView>
                <CustomText type="caption" style={{ marginLeft: 5, marginVertical: 20, fontSize: 16 }}>{post.content}</CustomText>
                <ThemedView style={styles.likesInfoContainer}>
                    <TouchableOpacity onPress={async () => {
                        await toggleLikePress();
                    }}>
                        {post && post.likedBy && userFromDb && <FontAwesome5 name="thumbs-up" size={20} color={ post.likedBy.includes(userFromDb!.id) ? scheme["light"].tabIconSelected : scheme[theme ? theme : "light"].text } />}
                    </TouchableOpacity>
                    {post && post.likedBy && userFromDb && <CustomText type="caption" style={[{ color: post.likedBy.includes(userFromDb!.id) ? scheme["light"].tabIconSelected : scheme[theme ? theme: "light"].text},{fontSize: 16 }]}>{post.numberOfLikes}</CustomText>}
                </ThemedView>
            </ThemedView>
            <TouchableOpacity style={styles.reportIcon}>
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={24}
                        color={scheme[theme? theme:"light"].text + "70"}
                        onPress={handleReportIconPress}
                    />
            </TouchableOpacity>
        </ThemedView>
    );
}
const styles = StyleSheet.create({
    postContainer: {
        paddingHorizontal: 1,
        paddingVertical: 10,
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    profileImageDetailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginVertical: 2.5,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    likesInfoContainer: {
        flexDirection: "row",
        gap: 5,
    },
    reportIcon: {
        position: "absolute",
        right: 18,
        top: 15,
    }
});

export default RenderPost;