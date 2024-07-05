import React, { Fragment, useState } from "react";
import { Button, Alert } from "react-native";
import CustomText from "./CustomText";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useAuthenticationContext } from "../context/AuthContext";

const ConfirmSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationCode, setconfirmationCode] = useState("");
  const { handleSignUpConfirmation } = useAuthenticationContext();
  const handleSignUpConfirmationPress = () => {
    if (!email || !confirmationCode) {
      Alert.alert("Please enter an email and confirmation code");
      return;
    }
    handleSignUpConfirmation({
      username: email,
      password,
      confirmationCode,
    });
  };
  return (
    <Fragment>
      <CustomText type="title">Confirm Sign Up</CustomText>
      <CustomInput value={email} label="Email" onChangeText={setEmail} />
      <CustomInput label="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <CustomInput value={confirmationCode} label="Code" onChangeText={setconfirmationCode} />
      <CustomButton type="primary" title="Confirm" onPress={handleSignUpConfirmationPress} />
      <Button title="Resend code" />
    </Fragment>
  );
};

export default ConfirmSignUp;
