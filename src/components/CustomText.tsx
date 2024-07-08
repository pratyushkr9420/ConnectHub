import React, { FC, ReactNode } from "react";
import { Text, StyleSheet, useColorScheme, ColorSchemeName, TextProps } from "react-native";
import scheme from "../../themes/colors";

type CustomTextProps = {
  children: ReactNode;
  type: "body" | "title" | "caption";
} & TextProps;

const CustomText: FC<CustomTextProps> = ({ children, type = "body", style }) => {
  const theme: ColorSchemeName = useColorScheme();
  return (
    <Text style={[styles[type], { color: scheme[theme ? theme : "light"].text }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  body: {
    fontSize: 18,
  },
  caption: {
    fontSize: 14,
  },
});

export default CustomText;
