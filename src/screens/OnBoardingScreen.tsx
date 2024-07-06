import React, { FC, Fragment, useEffect } from "react";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { ThemedView } from "../../themes/theme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackPrams } from "../utils/types";
import { features } from "../utils/features";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthenticationContext } from "../context/AuthContext";
import { registerForPushNotificationsAsync } from "../utils/permissions";
import { updateUserNotificationTokenInDb } from "../utils/functions";

type OnBoardingScreenProps = {
  navigation: NativeStackNavigationProp<HomeStackPrams, "OnBoarding">;
};

const OnBoardingScreen: FC<OnBoardingScreenProps> = ({ navigation }) => {
  const { getLoggedInUserFromDb, userFromDb } = useAuthenticationContext();
  useEffect(() => {
    getLoggedInUserFromDb();
  },[])
  const handleContinue = async () => {
    await AsyncStorage.setItem("@isFirstLaunch", "true");
    // Add logic for permission like location for the app
    const newToken = await registerForPushNotificationsAsync();
    if (newToken !== null) {
      if (userFromDb) {
        await updateUserNotificationTokenInDb(userFromDb, newToken);
      }
      await getLoggedInUserFromDb();
    }
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CustomText type="title" style={styles.text}>
          Welcome to
        </CustomText>
        <CustomText type="title" style={styles.text}>
          ConnectHub
        </CustomText>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureContainer}>
            <Image source={feature.icon} style={styles.image} />
            <View style={styles.featureDescriptionWrapper}>
              <CustomText type="caption" style={{ fontWeight: "bold" }}>
                {feature.title}
              </CustomText>
              <CustomText type="caption">{feature.description}</CustomText>
            </View>
          </View>
        ))}
        <CustomButton
          type="primary"
          title="Continue"
          onPress={handleContinue}
          style={{ marginTop: 30 }}
        />
      </ThemedView>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  featureContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  text: {
    alignSelf: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
  featureDescriptionWrapper: {
    flexShrink: 1,
    padding: 10,
  },
});
