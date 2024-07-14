import React, { FC } from "react";
import { Alert, Image, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { TouchableOpacity } from "react-native";
import { User } from "../API";

type ChatRoomHeaderProps = {
    participant: User | null | undefined;
    navigation: any;
}


const backUpProfile = "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ChatRoomHeader: FC<ChatRoomHeaderProps> = ({ participant, navigation }) => {
    if (!participant) {
        Alert.alert("This User has left the conversation")
        return (
            <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.navigate("ContactProfile", { participant })}>
                <CustomText type="body">User left</CustomText>
            </TouchableOpacity>
        )    
    }
    return (
        <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.navigate("ContactProfile", { participant })}>
            <Image style={styles.image} source={{ uri: (participant && participant.profilePicture) ? participant.profilePicture : backUpProfile }} />
            {participant && <CustomText type="body">{participant.firstName}</CustomText>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
        paddingVertical: 2,
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
    }
})
export default ChatRoomHeader;