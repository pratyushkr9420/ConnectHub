import React, { Fragment, useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import { useAuthenticationContext } from "../context/AuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { setAuthState } = useAuthenticationContext();

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
        onPress={() => setAuthState("confirmForgotPassword")}
      />
      <CustomButton type="secondary" title="Back to Login" onPress={() => setAuthState("signIn")} />
    </Fragment>
  );
};

export default ForgotPassword;
