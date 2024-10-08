import React, { useEffect } from "react";
import { useAuthenticationContext } from "../context/AuthContext";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { ThemedScrollView } from "../../themes/theme";
import Profile from "../components/Profile";
import ProfileInfo from "../components/ProfileInfo";
import ProfilePermissions from "../components/ProfilePermissions";
import ProfileAuthOptions from "../components/ProfileAuthOptions";

const ProfileScreen = () => {
  const theme = useColorScheme();
  const { getLoggedInUser, getLoggedInUserFromDb } =
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
