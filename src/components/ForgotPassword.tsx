import React, { Fragment, useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import { useAuthenticationContext } from "../context/AuthContext";
import { Alert } from "react-native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { setAuthState, handleResetPassword, handleResetPasswordNextSteps } =
    useAuthenticationContext();

  const handleSendCodePress = async (username: string) => {
    if (!username) {
      Alert.alert("Provide an email");
      return;
    }
    const output = await handleResetPassword(username);
    if (output) {
      handleResetPasswordNextSteps(output);
    } else {
      throw Error("Error occured when trying to reset password");
    }
  };
  return (
    <Fragment>
      <CustomText type="title" style={{ marginBottom: 5 }}>
        Forgot Password
      </CustomText>
      <CustomText type="caption" style={{ marginBottom: 20 }}>
        Enter your email address to get the code to reset password
      </CustomText>
      <CustomInput value={email} label="Email" onChangeText={setEmail} />
      <CustomButton
        type="primary"
        title="Send Code"
        style={{ marginTop: 20 }}
        onPress={() => handleSendCodePress(email)}
      />
      <CustomButton type="secondary" title="Back to Login" onPress={() => setAuthState("signIn")} />
    </Fragment>
  );
};

export default ForgotPassword;
