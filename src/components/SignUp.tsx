import React, { Fragment, useState } from "react";
import { Alert, Button } from "react-native";
import CustomText from "./CustomText";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useAuthenticationContext } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignUp, setAuthState } = useAuthenticationContext();
  const handleSignUpPress = () => {
    if (!email || !password) {
      Alert.alert("Please enter an email and password");
      return;
    }
    handleSignUp({
      username: email,
      password,
    });
  };
  return (
    <Fragment>
      <CustomText type="title">Sign Up</CustomText>
      <CustomInput value={email} label="Email" onChangeText={setEmail} />
      <CustomInput
        value={password}
        label="Password"
        onChangeText={setPassword}
      />
      <CustomButton title="Sign Up" onPress={handleSignUpPress} />
      <Button title="Sign In" onPress={() => setAuthState("signIn")} />
    </Fragment>
  );
};

export default SignUp;
