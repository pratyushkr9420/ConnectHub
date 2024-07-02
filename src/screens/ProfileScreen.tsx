import React, { Fragment, useEffect } from "react";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import { useAuthenticationContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native";
import { ThemedView } from "../../themes/theme";

const ProfileScreen = () => {
  const { handleSignOut, authUser, getLoggedInUser } = useAuthenticationContext();
  useEffect(() => {
    getLoggedInUser();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <CustomText type="title">Welcome back!</CustomText>
        {authUser && <CustomText type="body">{authUser.username}</CustomText>}
        <CustomButton type="primary" title="Sign Out" onPress={handleSignOut} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
