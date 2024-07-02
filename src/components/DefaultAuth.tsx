import React, { Fragment } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import { useAuthenticationContext } from "../context/AuthContext";

const DefaultAuth = () => {
  const { setAuthState } = useAuthenticationContext();

  return (
    <Fragment>
      <CustomText type="title" style={{ fontSize: 45, marginBottom: 35 }}>
        ConnectHub
      </CustomText>
      <CustomText type="title" style={{ fontSize: 20, marginBottom: 15 }}>
        Your Digital Social Hub!
      </CustomText>
      <CustomButton type="primary" title="Create account" onPress={() => setAuthState("signUp")} />
      <CustomButton type="secondary" title="Login" onPress={() => setAuthState("signIn")} />
      {/* <CustomText type="caption" style={{ textAlign: "center", marginVertical: 12 }}>
        -Or-
      </CustomText>
      <CustomButton
        title="Sign In With Google"
        type="secondary"
        // onPress={() => Auth.federatedSignIn()}
      />
      <CustomButton
        title="Sign In With Apple"
        type="secondary"
        // onPress={() => Auth.federatedSignIn()}
      /> */}
    </Fragment>
  );
};

export default DefaultAuth;
