import { TextInput, View, StyleSheet, useColorScheme } from "react-native";
import scheme from "../../themes/colors";
import { FC } from "react";
import CustomText from "./CustomText";

type CustomInputProps = {
  label: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  value: string;
};

const CustomInput: FC<CustomInputProps> = ({ label, value, onChangeText, secureTextEntry }) => {
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <CustomText style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 2.5 }} type="caption">
        {label}
      </CustomText>
      <TextInput
        placeholder={label}
        style={[styles.input, styles[theme ? theme : "light"]]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  dark: {
    backgroundColor: scheme.dark.text + "06",
    borderColor: scheme.dark.text + "60",
    color: scheme.dark.text,
  },
  light: {
    backgroundColor: scheme.light.text + "06",
    borderColor: scheme.light.text + "60",
    color: scheme.light.text,
  },
});

export default CustomInput;
