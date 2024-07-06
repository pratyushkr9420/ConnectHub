import * as Notifications from 'expo-notifications';
import { Platform, Linking, Alert } from 'react-native';
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export function handleRegistrationError(errorMessage: string) {
    Alert.alert(errorMessage);
    throw new Error(errorMessage);
}

export async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert("Permission not granted for notifications",
        "Please enable notifications for this application in your phone settings",
        [
          {
            text: "Cancel",
            onPress: () => console.log('Cancelled granting of notification permission'),
            style:"cancel",
          },
          {
            text: "Go to Settings",
            onPress: () => {
              if (Platform.OS === 'ios') {
                Linking.openURL("app-settings:notifications");
              } else if (Platform.OS === 'android') {
                startActivityAsync(ActivityAction.NOTIFICATION_SETTINGS);
              } else {
                return;
              }
            },
            style: "default",
          }
        ]
      )
      return null;
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
    if (!projectId) {
      Alert.alert('Project ID not found');
      return null;
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log("Token generated for push notifications", pushTokenString);
      return pushTokenString;
    } catch (e: unknown) {
      Alert.alert(`Error occured while getting token, ${e}`);
      return null;
    }
  } else {
    Alert.alert('Must use physical device for push notifications');
    return null;
  }
};

export async function requestLocationPermission() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert("Permission not granted for locations",
      "Please enable location for this application in your phone settings",
      [
        {
          text: "Cancel",
          onPress: () => console.log('Cancelled granting of location permission'),
          style:"cancel",
        },
        {
          text: "Go to Settings",
          onPress: () => {
            if (Platform.OS === 'ios') {
              Linking.openURL("app-settings:location");
            } else if (Platform.OS === 'android') {
              startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS);
            } else {
              return;
            }
          },
          style: "default",
        }
      ]
    )
    return null;
  }
  let location: Location.LocationObject = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
  let { latitude, longitude } = location.coords;
  return { latitude, longitude };
}