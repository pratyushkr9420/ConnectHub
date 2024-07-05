import React, { Fragment, useEffect } from "react";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import { useAuthenticationContext } from "../context/AuthContext";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { ThemedView } from "../../themes/theme";
import Profile from "../components/Profile";

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
      <ThemedView style={{ flex: 1 }}>
        <Profile />
        <CustomButton type="primary" title="Sign Out" onPress={handleSignOut} />
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
