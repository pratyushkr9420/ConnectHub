import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AppNavigatorParams } from "../utils/types";
import {
  AuthenticationProvider,
  useAuthenticationContext,
} from "../context/AuthContext";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<AppNavigatorParams>();

const AppNavigator = () => {
  const { getLoggedInUser } = useAuthenticationContext();
  useEffect(() => {
    getLoggedInUser();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
