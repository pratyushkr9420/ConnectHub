import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  useColorScheme,
} from "react-native";
import scheme from "../../themes/colors";
import { FC } from "react";

type CustomButtonProps = {
  title: string;
  type: "primary" | "secondary";
} & TouchableOpacityProps;

const CustomButton: FC<CustomButtonProps> = ({ title, onPress, type = "primary", style, disabled }) => {
  const theme = useColorScheme();
  const getButtonStyle = (theme: any, type: any) => {
    if (theme === "light" && type === "primary") {
      return styles.primaryLight;
    } else if (theme === "light" && type === "secondary") {
      return styles.secondaryLight;
    } else if (theme === "dark" && type === "primary") {
      return styles.primaryDark;
    } else {
      return styles.secondaryDark;
    }
  };

  const getTextStyle = (theme: any, type: any) => {
    if (theme === "light" && type === "primary") {
      return scheme.light.background;
    } else if (theme === "light" && type === "secondary") {
      return scheme.light.text;
    } else if (theme === "dark" && type === "primary") {
      return scheme.dark.background;
    } else {
      return scheme.light.background;
    }
  };
  return (
    <TouchableOpacity disabled={disabled} style={[styles.button, getButtonStyle(theme, type), style]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: getTextStyle(theme, type) }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 45,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryLight: {
    backgroundColor: scheme.light.text,
  },
  secondaryLight: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: scheme.light.text,
  },
  primaryDark: {
    backgroundColor: scheme.dark.text,
  },
  secondaryDark: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: scheme.dark.text,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
