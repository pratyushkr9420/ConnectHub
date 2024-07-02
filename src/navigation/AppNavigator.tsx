import React, { useEffect } from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AppNavigatorParams } from "../utils/types";
import { AuthenticationProvider, useAuthenticationContext } from "../context/AuthContext";
import { useColorScheme } from "react-native";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<AppNavigatorParams>();

const AppNavigator = () => {
  const { getLoggedInUser } = useAuthenticationContext();
  useEffect(() => {
    getLoggedInUser();
  }, []);
  const apptheme = useColorScheme();
  return (
    <NavigationContainer theme={apptheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const WrappedNavigator = () => {
  return (
    <AuthenticationProvider>
      <AppNavigator />
    </AuthenticationProvider>
  );
};

export default WrappedNavigator;
