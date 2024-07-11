import React, { useEffect } from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AppNavigatorParams, ChatsStackPrams, HomeStackPrams } from "../utils/types";
import { AuthenticationProvider, useAuthenticationContext } from "../context/AuthContext";
import { Button, useColorScheme } from "react-native";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import { Ionicons } from "@expo/vector-icons";
import ChatScreen from "../screens/ChatScreen";
import CreateNewPostScreen from "../screens/CreateNewPostScreen";
import { usePostsContext } from "../context/PostsContext";
import { useChatsContext } from "../context/ChatsContext";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ChatRoomHeader from "../components/ChatRoomHeader";

const HomeStack = createNativeStackNavigator<HomeStackPrams>();
const ChatsStack = createNativeStackNavigator<ChatsStackPrams>();
const Tab = createBottomTabNavigator<AppNavigatorParams>();

const HomeStackNavigator = () => {
  const { authUser } = useAuthenticationContext();
  const { publishNewPost } = usePostsContext();
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
      }}/>
      <HomeStack.Screen
        name="CreateNewPost"
        component={CreateNewPostScreen}
        options={({ navigation, route }) => ({
          presentation: "modal",
          title: "New Post",
          headerRight:() => <Button disabled={!authUser} title="Publish" onPress={
            async () => {
              if (authUser) {
                await publishNewPost(authUser);
                navigation.navigate("Home")
              }
            }
          }/>
        })}
      />
      <HomeStack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{
          headerShown: false,
          presentation: "fullScreenModal",
        }}
      />
    </HomeStack.Navigator>
  );
};

const ChatsStackNavigator = () => {
  return (
    <ChatsStack.Navigator initialRouteName="Chats">
      <ChatsStack.Screen name="Chats" component={ChatScreen} options={{ headerShown: false}}/>
      <ChatsStack.Screen name="ChatRoom" component={ChatRoomScreen} options={({ navigation, route }) => ({
        headerTitle: () => <ChatRoomHeader participant={route.params?.participant}/>
      })} />
    </ChatsStack.Navigator>
  ) 
}

const AppNavigator = () => {
  const { getLoggedInUser, userFromDb, getLoggedInUserFromDb } = useAuthenticationContext();
  useEffect(() => {
    getLoggedInUser();
    getLoggedInUserFromDb();
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
          name="ChatsStack"
          component={ChatsStackNavigator}
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
