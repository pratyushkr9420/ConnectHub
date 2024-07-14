import React, { FC } from "react";
import { ThemedView } from "../../themes/theme";
import CustomText from "../components/CustomText";
import { SafeAreaView } from "react-native-safe-area-context";

const ShowPostScreen: FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedView style={{flex: 1}}>
                <CustomText type="title">Post to be rendered..</CustomText>
            </ThemedView>
        </SafeAreaView>
    )
}

export default ShowPostScreen;