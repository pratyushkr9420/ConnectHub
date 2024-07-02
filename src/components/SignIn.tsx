import React, { Fragment, useState } from "react";
import { Button, Alert, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useAuthenticationContext } from "../context/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn, setAuthState, handleSignOut } = useAuthenticationContext();
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
      <CustomInput label="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => setAuthState("forgotPassword")}
      >
        <CustomText type="caption">Forgot Password?</CustomText>
      </TouchableOpacity>
      <CustomButton type="primary" title="Sign In" onPress={handleSignInPress} />
      <CustomButton type="secondary" title="Go Back" onPress={() => setAuthState("default")} />
    </Fragment>
  );
}
