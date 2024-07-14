import React, { FC, ReactElement, useState } from "react";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { useChatsContext } from "../context/ChatsContext";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { Alert } from "react-native";
import { useAuthenticationContext } from "../context/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatsStackPrams } from "../utils/types";


type CreateNewChatRoomScreenProps = {
    navigation: NativeStackNavigationProp<ChatsStackPrams, "CreateChat">;
}

const CreateNewChatRoomScreen: FC <CreateNewChatRoomScreenProps>= ({ navigation }) => {
    const [email, setEmail] = useState("");
    const { addChatRoom } = useChatsContext();
    const { userFromDb } = useAuthenticationContext();
    const handlNewChatPress = async () => {
        if (userFromDb) {
            await addChatRoom(email, userFromDb, () => navigation.navigate("ChatRoom"));
        }
    }
    return (
        <ThemedView style={{flex: 1, paddingVertical: 10}}>
            <CustomText type="caption" style={{marginVertical: 5}}>Enter the email of the user you want to chat with</CustomText>
            <CustomInput label="Type email here." onChangeText={setEmail} value={email} />
            <CustomButton disabled={email.trim().length === 0} type="primary" title="Start new chat" onPress={handlNewChatPress}/>
        </ThemedView>
    )
}

export default CreateNewChatRoomScreen;