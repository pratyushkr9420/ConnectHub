import React, { useState, Fragment } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import { useAuthenticationContext } from "../context/AuthContext";
import { Alert } from "react-native";

export default function ConfirmForgotPassword() {
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setAuthState, handleConfirmResetPassword } = useAuthenticationContext();

  const handleResetPasswordPress = async (
    email: string,
    confirmationCode: string,
    password: string,
    confirmPassword: string,
  ) => {
    if (!email || !confirmationCode || !password || !confirmPassword) {
      Alert.alert("Missing credentials");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Both entries to the password should match");
      return;
    }
    await handleConfirmResetPassword({
      username: email,
      confirmationCode,
      newPassword: password,
    });
  };

  return (
    <Fragment>
      <CustomText type="title" style={{ marginBottom: 5 }}>
        Reset Password
      </CustomText>
      <CustomText type="caption" style={{ marginBottom: 15 }}>
        Enter your verification code and a new password.
      </CustomText>
      <CustomInput value={email} label="Email" onChangeText={setEmail} />
      <CustomInput
        value={confirmationCode}
        label="Verification Code"
        onChangeText={setConfirmationCode}
      />
      <CustomInput
        value={password}
        label="New Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomInput
        value={confirmPassword}
        label="Confirm New Password"
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <CustomButton
        type="primary"
        title="Reset Password"
        style={{ marginTop: 20 }}
        onPress={() => handleResetPasswordPress(email, confirmationCode, password, confirmPassword)}
      />
      <CustomButton type="secondary" title="Back to Login" onPress={() => setAuthState("signIn")} />
    </Fragment>
  );
}
