import React, { FC, useEffect } from "react";
import ListTasks from "../components/ListTasks";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { HomeStackPrams } from "../utils/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, StatusBar, useColorScheme } from "react-native";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<HomeStackPrams, "Home">;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useColorScheme();
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
        <CustomText type="title">Home</CustomText>
        <Button
          title="delete key"
          onPress={async () => {
            await AsyncStorage.removeItem("@isFirstLaunch");
          }}
        />
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default HomeScreen;
