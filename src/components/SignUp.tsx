import React, { Fragment, useState } from "react";
import { Alert, Button } from "react-native";
import CustomText from "./CustomText";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useAuthenticationContext } from "../context/AuthContext";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      <CustomInput value={firstName} label="First Name" onChangeText={setFirstName} />
      <CustomInput value={lastName} label="Last Name" onChangeText={setLastName} />
      <CustomInput value={email} label="Email" onChangeText={setEmail} />
      <CustomInput value={password} label="Password" onChangeText={setPassword} secureTextEntry />
      <CustomButton type="primary" title="Sign Up" onPress={handleSignUpPress} />
      <CustomButton type="secondary" title="Go Back" onPress={() => setAuthState("default")} />
    </Fragment>
  );
};

export default SignUp;
