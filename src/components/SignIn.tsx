import React, { Fragment, useState } from "react";
import { Button, Alert } from "react-native";
import CustomText from "../components/CustomText";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useAuthenticationContext } from "../context/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn, setAuthState } = useAuthenticationContext();
  const handleSignInPress = () => {
    if (!email || !password) {
      Alert.alert("Please enter an email and password");
      return;
    }
    handleSignIn({
      username: email,
      password,
    });
  };
  return (
    <Fragment>
      <CustomText type="title">Sign In</CustomText>
      <CustomInput label="Email" value={email} onChangeText={setEmail} />
      <CustomInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <CustomButton title="Sign In" onPress={handleSignInPress} />
      <Button title="Sign Up" onPress={() => setAuthState("signUp")} />
    </Fragment>
  );
}
