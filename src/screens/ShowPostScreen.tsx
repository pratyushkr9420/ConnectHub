import React, { FC, useEffect, useState } from "react";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp } from "@react-navigation/native";
import { NotificationStackParams } from "../utils/types";
import { generateClient } from "aws-amplify/api";
import { getPost } from "../graphql/queries";
import { Post } from "../API";
import RenderPost from "../components/RenderPost";

type ShowPostScreenProps = {
    route: RouteProp<NotificationStackParams, "ShowPost">;
}

const client = generateClient();

const ShowPostScreen: FC<ShowPostScreenProps> = ({ route }) => {
    const [postToShow, setPostToShow] = useState<Post | null | undefined>();
    const fetchPost = async () => {
        if (route.params && route.params.postID) {
            try {
                const response = await client.graphql({
                    query: getPost,
                    variables: {
                        id: route.params?.postID
                    }
                })
                setPostToShow(response.data.getPost as Post);
            } catch (e) {
                console.log("Error fetching the post to be rendered", e)
            }
        }
    }
    useEffect(() => {
        fetchPost();
    }, [route.params]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedView style={{flex: 1}}>
                {postToShow && <RenderPost post={postToShow} />}
            </ThemedView>
        </SafeAreaView>
    )
}

export default ShowPostScreen;