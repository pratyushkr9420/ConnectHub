import React, { useEffect } from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AppNavigatorParams, HomeStackPrams } from "../utils/types";
import { AuthenticationProvider, useAuthenticationContext } from "../context/AuthContext";
import { useColorScheme } from "react-native";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import { Ionicons } from "@expo/vector-icons";
import ChatScreen from "../screens/ChatScreen";
import CreateNewPostScreen from "../screens/CreateNewPostScreen";

const HomeStack = createNativeStackNavigator<HomeStackPrams>();
const Tab = createBottomTabNavigator<AppNavigatorParams>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="CreateNewPost"
        component={CreateNewPostScreen}
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <HomeStack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </HomeStack.Navigator>
  );
};

const AppNavigator = () => {
  const { getLoggedInUser } = useAuthenticationContext();
  useEffect(() => {
    getLoggedInUser();
  }, []);
  const apptheme = useColorScheme();
  return (
    <NavigationContainer theme={apptheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tab.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Chats"
          component={ChatScreen}
          options={{
            tabBarLabel: "Chats",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
