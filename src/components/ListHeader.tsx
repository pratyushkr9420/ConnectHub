import React, { FC } from "react";
import { ThemedView } from "../../themes/theme";
import CustomText from "./CustomText";
import { StyleSheet, Touchable, TouchableOpacity  } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import scheme from "../../themes/colors";

type ListHeaderProps = {
    title: string;
    iconName: any;
    onPressHandler: () => void;
}

const ListHeader : FC <ListHeaderProps>= ({ title, iconName, onPressHandler }) => {
    return (
        <ThemedView style={styles.container}>
            <CustomText type="title" style={{marginLeft: 20}}>{title}</CustomText>
            <TouchableOpacity onPress={onPressHandler}>
                <Ionicons name={iconName} size={32} color={scheme.light.tabIconSelected} />
            </TouchableOpacity>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default ListHeader;