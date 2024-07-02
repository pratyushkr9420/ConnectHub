import React, { FC, ReactNode } from "react";
import { useColorScheme, View, Text, ViewProps, ColorSchemeName } from "react-native";
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
