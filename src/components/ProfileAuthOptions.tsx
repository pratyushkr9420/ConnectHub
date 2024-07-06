import React from "react";
import { ThemedView } from "../../themes/theme";
import { Alert, TouchableOpacity, useColorScheme } from "react-native";
import CustomText from "./CustomText";
import scheme from "../../themes/colors";
import { useAuthenticationContext } from "../context/AuthContext";

const ProfileAuthOptions = () => {
    const theme = useColorScheme();
    const { handleSignOut, handleUserDelete } = useAuthenticationContext();
    const handeleDeletePress = () => {
        Alert.alert(
            "Are you sure you want to delete your account?",
            "This action is irreversible",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancelled deletion of user account"),
                    style: "cancel",
                },
                {
                    text: "Delete User",
                    onPress: async () => {
                        await handleUserDelete();
                        Alert.alert("User successfully deleted");
                    }
                }
            ]
        )
    }
    return (
        <ThemedView style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
            <TouchableOpacity onPress={handleSignOut}>
                <CustomText style={{marginLeft: 18,  fontSize: 18}} type="body">Sign Out</CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={handeleDeletePress}>
                <CustomText style={[{ fontSize: 18 }, { color: scheme[theme? theme:"light"].red}]} type="body">Delete Account</CustomText>
            </TouchableOpacity>
        </ThemedView>
    )
}
export default ProfileAuthOptions;