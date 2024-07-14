import React, { FC, useEffect } from "react";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { useNotificationsContext } from "../context/NotificationsContext";
import { useAuthenticationContext } from "../context/AuthContext";
import ListHeader from "../components/ListHeader";
import { Button, StatusBar, useColorScheme } from "react-native";
import scheme from "../../themes/colors";
import RenderNotification from "../components/RenderNotification";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NotificationStackParams } from "../utils/types";

type NotificationsScreenProps = {
    navigation: NativeStackNavigationProp<NotificationStackParams, "Notifications">;
}
const NotificationsScreen : FC <NotificationsScreenProps>= ({ navigation }) => {
    const { notifications, fetchNotificationsByUser, fetchAdditionalNotificationsByUser, isLoadingNotifications } = useNotificationsContext();
    const { userFromDb, getLoggedInUserFromDb } = useAuthenticationContext();
    const theme = useColorScheme();
    useEffect(() => {
        getLoggedInUserFromDb();
        fetchNotificationsByUser(userFromDb);
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
         <ThemedView style={{ flex: 1, paddingHorizontal: 0}}>
            <FlashList
                data={notifications}
                refreshing={isLoadingNotifications}
                showsVerticalScrollIndicator={false}
                onRefresh={() => fetchNotificationsByUser(userFromDb)}
                contentContainerStyle={{paddingHorizontal: 5}}
                renderItem={({ item }) => <RenderNotification notification={item} navigation={navigation}/>}
                estimatedItemSize={200}
                ListHeaderComponent={() => <ListHeader title="Notifications" />}
                ListFooterComponent={() => <Button title="See more notifications" onPress={() => fetchAdditionalNotificationsByUser(userFromDb)} color={scheme[theme ? theme: "light"].text}/>}
            />
         </ThemedView>
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
      </SafeAreaView>
    )
}

export default NotificationsScreen;