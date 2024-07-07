import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import { ThemedView } from "../../themes/theme";
import CustomText from "./CustomText";
import { Post, User } from "../API";
import { useAuthenticationContext } from "../context/AuthContext";
import { useColorScheme, StyleSheet, Image, TouchableOpacity } from "react-native";
import scheme from "../../themes/colors";
import { generateClient } from "aws-amplify/api";
import { getUser } from "../graphql/queries";
import { FontAwesome5 } from '@expo/vector-icons';

const client = generateClient();

const backUpProfile = "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
type PostProps = {
    post: Post;
}

const RenderPost: FC<PostProps> = ({ post }) => {
    const { userFromDb, getLoggedInUserFromDb } = useAuthenticationContext();
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
                <CustomText type="caption" style={{ marginLeft: 5, marginVertical: 10, fontSize: 16 }}>{post.content}</CustomText>
                <ThemedView style={styles.likesInfoContainer}>
                    <TouchableOpacity>
                        {post && post.likedBy && userFromDb && <FontAwesome5 name="thumbs-up" size={20} color={ post.likedBy.includes(userFromDb!.id) ? scheme["light"].tabIconSelected : scheme[theme ? theme : "light"].text } />}
                    </TouchableOpacity>
                    {post && post.likedBy && userFromDb && <CustomText type="caption" style={[{ color: post.likedBy.includes(userFromDb!.id) ? scheme["light"].tabIconSelected : scheme[theme ? theme: "light"].text},{fontSize: 16 }]}>{post.numberOfLikes}</CustomText>}
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
}
const styles = StyleSheet.create({
    postContainer: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    profileImageDetailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: 5,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    likesInfoContainer: {
        flexDirection: "row",
        gap: 5,
    }
});

export default RenderPost;