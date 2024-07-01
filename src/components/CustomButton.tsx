import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { Colors } from "../../constants/colors";
import { FC } from "react";

type CustomButtonProps = {
  title: string;
} & TouchableOpacityProps;

const CustomButton: FC<CustomButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
