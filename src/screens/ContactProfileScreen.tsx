import React, { FC } from "react";
import { ThemedScrollView, ThemedView } from "../../themes/theme";
import { Alert, Dimensions, Image, StyleSheet, TouchableOpacity, TouchableOpacityProps, useColorScheme } from "react-native";
import MapView from "react-native-maps";
import CustomText from "../components/CustomText";
import { RouteProp } from "@react-navigation/native";
import { ChatsStackPrams } from "../utils/types";
import scheme from "../../themes/colors";
import moment from "moment";
import { KEY, SERVICE_ID, TEMPLATE_ID } from "@env";
import { EmailJSResponseStatus, send } from "@emailjs/react-native";
import { useAuthenticationContext } from "../context/AuthContext";
import { useChatsContext } from "../context/ChatsContext";

const backUpProfile = "https://images.unsplash.com/photo-1530021232320-687d8e3dba54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type ContactProfileScreenProps = {
    route: RouteProp<ChatsStackPrams, "ContactProfile">;
};

const ContactProfileScreen : FC <ContactProfileScreenProps>= ({ route }) => {
    const participant = route.params?.participant;
    const { userFromDb } = useAuthenticationContext();
    const { removeChatRoom } = useChatsContext();
    console.log(route.params?.participant);
    const sendReportEmail = async () => {
        try {
            await send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                  name:`${userFromDb!.firstName} ${userFromDb!.lastName}`,
                  post_id: '',
                  user_id: userFromDb!.id,
                  message: `User with user id ${route.params?.participant?.id} reported by user with userId: ${userFromDb!.id}`,
                },
                {
                  publicKey: KEY,
                },
              );
           Alert.alert("Thank you for your report. We will review it as soon as possible.")
        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
              console.log('EmailJS Request Failed...', err);
            }
      
            console.log('ERROR', err);
          }
        // alert("Thank you for your report. We will review it as soon as possible.");
    }
    
    const handleReportUser = async () => {
        Alert.alert("Do you want to report this post by the user",
            "Is so press confirm, else you can abort this action by pressing cancel",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Presed cancel on reporting user"),
                    style:"cancel"
                },
                {
                    text: "Confirm",
                    onPress: async () => await sendReportEmail(),
                    style:"destructive"
                }
            ]
        )
    }
    const handleDeleteConversation = async () => {
        Alert.alert("Do you want to delete this conversation with this user",
            "Its a permanent action that cannot be reversed. Press cancel to abort or confirm to delete this convesation",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Presed cancel on deleting conversation with user"),
                    style:"cancel"
                },
                {
                    text: "Confirm",
                    onPress: async () => {},
                    style:"destructive"
                }
            ]
        )
    }
    if (!participant) {
        return (
            <ThemedView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <CustomText type="body">No such user exits on the application anymore..</CustomText>
            </ThemedView>
        )
    }
    return (
        <ThemedScrollView style={{flex : 1, paddingHorizontal: 0}}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: participant.latitude ?  parseFloat(participant.latitude) : 37.78825,
                    longitude: participant.longitude ?  parseFloat(participant.longitude) :-122.4324,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            />
            {<Image style={styles.profile} source={{ uri: participant.profilePicture ? participant.profilePicture : backUpProfile }} />}
            <CustomText type="body" style={{ fontWeight: "bold", marginTop: 60, textAlign: "center" }}>{participant.firstName} {participant.lastName}</CustomText>
            <CustomText type="caption" style={{ fontWeight: "500", textAlign: "center" }}>{participant.status ? participant.status : "Hey there I am on ConnectHub"}</CustomText>
            {participant.email && <InfoField label="Email" value={participant.email} />}
            <InfoField label="Member since" value={moment(participant.createdAt).fromNow()} />
            <InfoField style={{marginTop: 40}}label="Report User" permanent handlePress={handleReportUser}/>
            <InfoField label="Delete Conversation" permanent handlePress={handleDeleteConversation}/>
        </ThemedScrollView>
    )
}

type InfoFieldProps = {
    handlePress?: () => Promise<void>;
    permanent?: boolean;
    label: string,
    value?: string,
} & TouchableOpacityProps;

const InfoField: FC <InfoFieldProps>= ({ handlePress, label, value, permanent, style}) => {
    const theme = useColorScheme();
    return (
        <TouchableOpacity disabled={!handlePress} onPress={handlePress} style={[styles.infoContainer,{borderBottomColor: scheme[theme? theme: "light"].text + "50"}, style]}>
            <CustomText
                type="caption"
                style={[{fontWeight: permanent ? "bold" : 600},{color: permanent ? scheme[theme? theme: "light"].red : scheme[theme? theme: "light"].text}]}
            >
                {label}
            </CustomText>
            <CustomText
                type="caption"
                style={{color: permanent ? scheme[theme? theme: "light"].red : scheme[theme? theme: "light"].text}}
            >
                {value}
            </CustomText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%',
        height: 0.4 * (Dimensions.get("window").height),
    },
    profile: {
        position: "absolute",
        top: "40%",
        width: 120,
        height: 120,
        borderRadius: 60,
        alignSelf: "center"
    },
    profileNameText: {
        textAlign: "center",
        marginTop: 200,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})

export default ContactProfileScreen;