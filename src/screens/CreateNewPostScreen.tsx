import React, { FC, useCallback } from "react";
import { ThemedScrollView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackPrams } from "../utils/types";
import { TextInput, StyleSheet, useColorScheme } from "react-native";
import { usePostsContext } from "../context/PostsContext";
import scheme from "../../themes/colors";
import { useFocusEffect } from "@react-navigation/native";

type CreateNewPostScreenProps = {
    navigation: NativeStackNavigationProp<HomeStackPrams, "CreateNewPost">;
};
  
const CreateNewPostScreen : FC <CreateNewPostScreenProps>= ({ navigation }) => {
    const theme = useColorScheme();
    const { newPostContent, setNewPostContent } = usePostsContext();
    const textCountColor = () => {
        if ((300 - newPostContent.length) > 100) {
            return undefined;
        } else if ((300 - newPostContent.length) > 30) {
            return "orange";
        } else {
            return "red";
        }
    }
    useFocusEffect(useCallback(() => setNewPostContent(""),[]));
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedScrollView style={{ flex: 1, paddingVertical: 20 }}>
                <CustomText type="caption" style={{ fontWeight: 700, marginLeft: 5, marginBottom: 5 }}>What are you thinking?</CustomText>
                <TextInput
                    placeholder="Type your post here.."
                    placeholderTextColor={scheme[theme ? theme : "light"].text + "50"}
                    multiline
                    maxLength={300}
                    value={newPostContent}
                    style={[styles.input, { color: scheme[theme ? theme : "light"].text }]}
                    onChangeText={setNewPostContent}
                />
                <CustomText
                    type="caption"
                    style={{ fontWeight: 700, marginTop: 50, textAlign: "right", color: textCountColor()}}>
                    Characters remaining: {300 - newPostContent.length}
                </CustomText>
            </ThemedScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 5,
        fontSize: 17,
        fontWeight: 500,
        maxHeight: 200,
    }
})

export default CreateNewPostScreen;