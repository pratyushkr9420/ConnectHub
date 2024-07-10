import React, { FC, useEffect, useState } from "react";
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

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<HomeStackPrams, "Home">;
};


const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useColorScheme();
  const { posts, fetchPosts, fetchAdditionalPosts, loadingPosts } = usePostsContext();
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
    checkFirstLaunch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
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
