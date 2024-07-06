import React, { FC, useState } from "react";
import { ThemedView } from "../../themes/theme";
import CustomText from "./CustomText";
import { Alert, ColorSchemeName, StyleSheet, Text, TextInput, useColorScheme, View, Switch, Platform, TouchableOpacity } from "react-native";
import { useAuthenticationContext } from "../context/AuthContext";
import { UserFromDb } from "../utils/types";
import { updateUserNotificationTokenInDb, updateUserLocationInDb } from "../utils/functions";
import scheme from "../../themes/colors";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync, requestLocationPermission } from "../utils/permissions";

  
const ProfilePermissions = () => {
    const theme = useColorScheme();
    const { userFromDb, getLoggedInUserFromDb } = useAuthenticationContext();
    const handleLocationSwitchToggle = async () => {
        if (userFromDb && (userFromDb.latitude === null || userFromDb.longitude === null)) {
            const newLocation = await requestLocationPermission();
            if (newLocation !== null) {
                await updateUserLocationInDb(userFromDb, newLocation);
            }
        } else if (userFromDb && userFromDb.latitude && userFromDb.longitude) {
            await updateUserLocationInDb(userFromDb, { latitude: null, longitude: null });
        }
        await getLoggedInUserFromDb();
    }
    const handleNotificationSwitchToggle = async () => {
        if (Device.isDevice) {
            if (userFromDb && userFromDb.notificationToken === null) {
                const newToken = await registerForPushNotificationsAsync();
                if (newToken !== null) {
                    await updateUserNotificationTokenInDb(userFromDb, newToken);
                } else {
                    await updateUserNotificationTokenInDb(userFromDb, newToken);
                }
            } else if (userFromDb && userFromDb.notificationToken) {
                await updateUserNotificationTokenInDb(userFromDb, null);
            }
            await getLoggedInUserFromDb();
        } else {
            Alert.alert('Must use physical device for push notifications');
        }
    }

    return (
        <ThemedView style={{marginTop: 10}}>
            <CustomText type="caption" style={{marginLeft: 13, marginVertical: 5,  fontSize: 18}}>PERMISSIONS</CustomText>
            {userFromDb && <ProfileInfoField handleUpdate={handleNotificationSwitchToggle} value={userFromDb.notificationToken ? true : false} theme={theme} userFromDb={userFromDb} handleLoggedUserUpdate={getLoggedInUserFromDb} label="Notifications" />}
            {userFromDb && <ProfileInfoField handleUpdate={handleLocationSwitchToggle} value={userFromDb.latitude ? true : false} theme={theme} userFromDb={userFromDb} handleLoggedUserUpdate={getLoggedInUserFromDb} label="Location" />}
        </ThemedView>
    )
}
export default ProfilePermissions; 

type ProfileInfoFieldProps = {
    userFromDb: UserFromDb,
    label: string;
    theme: ColorSchemeName;
    value: boolean;
    handleLoggedUserUpdate: () => Promise<void>;
    handleUpdate: () => void;
}
const ProfileInfoField: FC<ProfileInfoFieldProps> = ({ label, theme,  value, handleLoggedUserUpdate, userFromDb, handleUpdate }) => {
    return (
        <ThemedView style={styles.InfoFieldContainer}>
            <CustomText type="body">{label}</CustomText>
            <Switch value={ value} onValueChange={handleUpdate}/>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    InfoFieldContainer: {
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        marginVertical: 10,
    },
    input: {
        fontSize: 18,
        flexShrink :1,
    },
})