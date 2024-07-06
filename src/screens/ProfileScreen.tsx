import React, { Fragment, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import { useAuthenticationContext } from "../context/AuthContext";
import { SafeAreaView, StatusBar, TouchableOpacity, useColorScheme } from "react-native";
import { ThemedScrollView, ThemedView } from "../../themes/theme";
import Profile from "../components/Profile";
import ProfileInfo from "../components/ProfileInfo";
import ProfilePermissions from "../components/ProfilePermissions";
import CustomText from "../components/CustomText";
import scheme from "../../themes/colors";
import ProfileAuthOptions from "../components/ProfileAuthOptions";

const ProfileScreen = () => {
  const theme = useColorScheme();
  const { handleSignOut, authUser, getLoggedInUser, userFromDb, getLoggedInUserFromDb } =
    useAuthenticationContext();
  useEffect(() => {
    getLoggedInUser();
    getLoggedInUserFromDb();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedScrollView style={{ flex: 1, paddingBottom: 100, marginBottom: 50 }}>
        <Profile />
        <ProfileInfo />
        <ProfilePermissions />
        <ProfileAuthOptions/>
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
      </ThemedScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
