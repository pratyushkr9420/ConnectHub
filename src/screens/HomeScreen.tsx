import React, { FC, useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../../themes/theme";
import { HomeStackPrams } from "../utils/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlashList } from "@shopify/flash-list";
import { Button, StatusBar, useColorScheme } from "react-native";
import ListHeader from "../components/ListHeader";
import RenderPost from "../components/RenderPost";
import scheme from "../../themes/colors";
import { usePostsContext } from "../context/PostsContext";
import { useAuthenticationContext } from "../context/AuthContext";
import * as Notifications from 'expo-notifications';
import { NotificationType } from "../API";
import { useNotificationsContext } from "../context/NotificationsContext";
import { useFocusEffect } from "@react-navigation/native";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<HomeStackPrams, "Home">;
};


const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useColorScheme();
  const { posts, fetchPosts, fetchAdditionalPosts, loadingPosts } = usePostsContext();
  const { userFromDb } = useAuthenticationContext();
  const { fetchNotificationsByUser } = useNotificationsContext();
  const checkFirstLaunch = async () => {
    try {
      const value = await AsyncStorage.getItem("@isFirstLaunch");
      if (value === null) {
        navigation.navigate("OnBoarding");
      }
    } catch (e) {
      console.log("Error retreving first launch configurataions");
    }
  };
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
      const notificationData = response.notification.request.content.data;
      switch (notificationData.type) {
        case NotificationType.LIKED_POST:
          navigation.navigate("ShowPost", { postID: notificationData.postID });
          break;
        case NotificationType.STARTED_CONVERSATION:
          navigation.navigate("ChatRoom", { participant: notificationData.sender, chatRoomID: notificationData.chatRoomID });
          break;
      }
    });
    return () => subscription.remove();
  }, []);
  
  useEffect(() => {
    checkFirstLaunch();
  }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     userFromDb && fetchNotificationsByUser(userFromDb);
  //     return () => {
  //       console.log('This route is now unfocused.');
  //     }
  //   }, []))
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, paddingHorizontal: 0}}>
        <FlashList
          data={posts}
          refreshing={loadingPosts}
          showsVerticalScrollIndicator={false}
          onRefresh={fetchPosts}
          contentContainerStyle={{paddingRight: 5}}
          renderItem={({ item }) => <RenderPost post={item}/>}
          estimatedItemSize={200}
          ListHeaderComponent={() => <ListHeader title="Posts" iconName="add-circle-sharp" onPressHandler={() => navigation.navigate("CreateNewPost")} />}
          ListFooterComponent={() => <Button title="See more posts" onPress={fetchAdditionalPosts} color={scheme[theme ? theme: "light"].text}/>}
        />
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default HomeScreen;
