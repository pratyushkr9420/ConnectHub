import React, { FC, ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

type CustomTextProps = {
  children: ReactNode;
  type: "body" | "title" | "caption";
};

const CustomText: FC<CustomTextProps> = ({ children, type = "body" }) => {
  return <Text style={styles[type]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
  },
  body: {
    fontSize: 18,
    color: Colors.dark,
  },
  caption: {
    fontSize: 14,
    color: Colors.dark,
  },
});

export default CustomText;
