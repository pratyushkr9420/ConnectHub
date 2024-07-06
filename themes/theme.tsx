import React, { FC, ReactNode } from "react";
import { useColorScheme, View, Text, ViewProps, ColorSchemeName } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import scheme from "./colors";

type ThemedViewProps = {
  children: ReactNode;
} & ViewProps;

export const ThemedView: FC<ThemedViewProps> = ({ style, children, ...props }) => {
  const theme: ColorSchemeName = useColorScheme();
  return (
    <View
      style={[
        { backgroundColor: scheme[theme ? theme : "light"].background, paddingHorizontal: 15 },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};


export const ThemedScrollView: FC<ThemedViewProps> = ({ style, children, ...props }) => {
  const theme: ColorSchemeName = useColorScheme();
  return (
    <KeyboardAwareScrollView
      style={[
        { backgroundColor: scheme[theme ? theme : "light"].background, paddingHorizontal: 15 },
        style,
      ]}
      {...props}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};
