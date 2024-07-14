import React, { useEffect } from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AppNavigatorParams, ChatsStackPrams, HomeStackPrams, NotificationStackParams } from "../utils/types";
import { AuthenticationProvider, useAuthenticationContext } from "../context/AuthContext";
import { Button, TouchableOpacity, useColorScheme } from "react-native";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import { Ionicons } from "@expo/vector-icons";
import ChatScreen from "../screens/ChatScreen";
import CreateNewPostScreen from "../screens/CreateNewPostScreen";
import { usePostsContext } from "../context/PostsContext";
import { useChatsContext } from "../context/ChatsContext";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ChatRoomHeader from "../components/ChatRoomHeader";
import ContactProfileScreen from "../screens/ContactProfileScreen";
import CreateNewChatRoomScreen from "../screens/CreateNewChatRoomScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ShowPostScreen from "../screens/ShowPostScreen";
import { useNotificationsContext } from "../context/NotificationsContext";

const HomeStack = createNativeStackNavigator<HomeStackPrams>();
const ChatsStack = createNativeStackNavigator<ChatsStackPrams>();
const NotificationsStack = createNativeStackNavigator<NotificationStackParams>();
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
      <HomeStack.Screen name="ShowPost" component={ShowPostScreen} />
      <HomeStack.Screen name="ChatRoom" component={ChatRoomScreen} options={({ navigation, route }) => ({
        headerTitle: () => <ChatRoomHeader navigation={navigation} participant={route.params?.participant}/>
      })} />
      <HomeStack.Screen name="ContactProfile" component={ContactProfileScreen} options={{ title: "Contact Info", presentation: "modal" }} />
    </HomeStack.Navigator>
  );
};

const ChatsStackNavigator = () => {
  return (
    <ChatsStack.Navigator initialRouteName="Chats">
      <ChatsStack.Screen name="Chats" component={ChatScreen} options={{ headerShown: false}}/>
      <ChatsStack.Screen name="ChatRoom" component={ChatRoomScreen} options={({ navigation, route }) => ({
        headerTitle: () => <ChatRoomHeader navigation={navigation} participant={route.params?.participant}/>
      })} />
      <ChatsStack.Screen name="ContactProfile" component={ContactProfileScreen} options={{ title: "Contact Info", presentation: "modal" }} />
      <ChatsStack.Screen name="CreateChat" component={CreateNewChatRoomScreen} options={{ title: "Create Chat", presentation: "modal"}}/>
    </ChatsStack.Navigator>
  ) 
}

const NotificationStackNavigator = () => {
  return (
    <NotificationsStack.Navigator initialRouteName="Notifications">
      <NotificationsStack.Screen name="Notifications" component={NotificationsScreen} options={{headerShown : false}}/>
      <NotificationsStack.Screen name="ChatRoom" component={ChatRoomScreen} options={({ navigation, route }) => ({
        headerTitle: () => <ChatRoomHeader navigation={navigation} participant={route.params?.participant}/>
      })} />
      <NotificationsStack.Screen name="ShowPost" component={ShowPostScreen} />
      <NotificationsStack.Screen name="ContactProfile" component={ContactProfileScreen} options={{ title: "Contact Info", presentation: "modal" }} />
    </NotificationsStack.Navigator>
  )
}

const AppNavigator = () => {
  const { getLoggedInUser, userFromDb, getLoggedInUserFromDb } = useAuthenticationContext();
  const { notifications } = useNotificationsContext();
  const unReadNotificationsCount = notifications.map(notification => notification.isSeen === false).length;
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
          name="NotificationsStack"
          component={NotificationStackNavigator}
          options={{
            tabBarLabel: "Notifcations",
            tabBarBadge: unReadNotificationsCount,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications" size={size} color={color} />
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
