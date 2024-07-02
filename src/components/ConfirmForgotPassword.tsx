import React, { useState, Fragment } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import { useAuthenticationContext } from "../context/AuthContext";

export default function ConfirmForgotPassword() {
  const [verificationcode, setVerificationCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const { setAuthState } = useAuthenticationContext();

  return (
    <Fragment>
      <CustomText type="title" style={{ marginBottom: 5 }}>
        Reset Password
      </CustomText>
      <CustomText type="caption" style={{ marginBottom: 15 }}>
        Enter your verification code and a new password.
      </CustomText>
      <CustomInput
        value={verificationcode}
        label="Verification Code"
        onChangeText={setVerificationCode}
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
        // onPress={handleResetPassword}
      />
      <CustomButton type="secondary" title="Back to Login" onPress={() => setAuthState("signIn")} />
    </Fragment>
  );
}
