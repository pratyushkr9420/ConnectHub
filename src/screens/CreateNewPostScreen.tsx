import React, { FC } from "react";
import { ThemedScrollView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackPrams } from "../utils/types";
import CustomButton from "../components/CustomButton";

type CreateNewPostScreenProps = {
    navigation: NativeStackNavigationProp<HomeStackPrams, "CreateNewPost">;
};
  
const CreateNewPostScreen : FC <CreateNewPostScreenProps>= ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedScrollView>
                <CustomText type="caption">What are you thinking?</CustomText>
                <CustomButton title="back" type="primary" onPress={() => navigation.goBack()}/>
            </ThemedScrollView>
        </SafeAreaView>
    )
}

export default CreateNewPostScreen;