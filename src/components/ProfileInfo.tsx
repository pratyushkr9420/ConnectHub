import React, { FC, useState } from "react";
import { ThemedView } from "../../themes/theme";
import CustomText from "./CustomText";
import { ColorSchemeName, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";
import { useAuthenticationContext } from "../context/AuthContext";
import { UserFromDb } from "../utils/types";
import { updateUserFirstNameInDb, updateUserLastNameInDb, updateUserStatusInDb  } from "../utils/userfunctions";
import scheme from "../../themes/colors";

const ProfileInfo = () => {
    const theme = useColorScheme();
    const { userFromDb, getLoggedInUserFromDb } = useAuthenticationContext();
    return (
        <ThemedView style={{ marginTop: 10, marginBottom: 5}}>
           <CustomText type="caption" style={{marginLeft: 13, marginVertical: 5,  fontSize: 18}}>INFORMATION</CustomText>
            {userFromDb && <ProfileInfoField theme={theme} userFromDb={userFromDb} handleLoggedUserUpdate={getLoggedInUserFromDb} label="First Name" updateUserFirstNameInDb={updateUserFirstNameInDb} editable value={userFromDb.firstName}/>}
            {userFromDb && <ProfileInfoField theme={theme} userFromDb={userFromDb} handleLoggedUserUpdate={getLoggedInUserFromDb} label="Last Name" updateUserLastNameInDb={updateUserLastNameInDb} editable value={userFromDb.lastName} />}
            {userFromDb && <ProfileInfoField theme={theme} userFromDb={userFromDb} handleLoggedUserUpdate={getLoggedInUserFromDb} label="Email" value={userFromDb.email} />}
            {userFromDb && <ProfileInfoField theme={theme} userFromDb={userFromDb} handleLoggedUserUpdate={getLoggedInUserFromDb} label="Status" updateUserStatusInDb={updateUserStatusInDb} editable value={userFromDb.status} />}
        </ThemedView>
    )
}
export default ProfileInfo;

type ProfileInfoFieldProps = {
    userFromDb: UserFromDb,
    label: string;
    value: string | null | undefined ;
    editable?: boolean;
    theme: ColorSchemeName;
    updateUserFirstNameInDb?: (userFromDb: UserFromDb, newFirstName: string) => Promise<void>;
    updateUserLastNameInDb?: (userFromDb: UserFromDb, newLastName: string) => Promise<void>;
    updateUserStatusInDb?: (userFromDb: UserFromDb, newStatus: string) => Promise<void>;
    handleLoggedUserUpdate: () => Promise<void>;
}
const ProfileInfoField: FC<ProfileInfoFieldProps> = ({ label, value, editable, theme, updateUserFirstNameInDb, updateUserLastNameInDb,  handleLoggedUserUpdate, userFromDb }) => {
    const [input, setInput] = useState<string | null | undefined>(value);
    const handleOnSubmit = async () => {
        if (editable) {
            if (label === "First Name") {
                input && updateUserFirstNameInDb && await updateUserFirstNameInDb(userFromDb, input)
            } else if (label === "Last Name") {
                input && updateUserLastNameInDb && await updateUserLastNameInDb(userFromDb, input)
            } else if (label === "Status") {
                input && updateUserStatusInDb && await updateUserStatusInDb(userFromDb, input)
            }
            await handleLoggedUserUpdate();
        }
    }
    return (
        <ThemedView style={styles.InfoFieldContainer}>
            <CustomText type="body">{label}</CustomText>
            <TextInput placeholder={label} keyboardType={editable ? "web-search" : "default"} style={[styles.input, { color: scheme[theme ? theme: "light"].text}]} value={input? input: ""} editable={editable ? editable : false} onSubmitEditing={handleOnSubmit} onChangeText={setInput}/>
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
        flexShrink: 1,
        fontWeight: "500",
    },
})