import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ConfirmSignUp from "../components/ConfirmSignUp";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  useColorScheme,
  StatusBar,
} from "react-native";
import { AuthenticationProvider, useAuthenticationContext } from "../context/AuthContext";
import scheme from "../../themes/colors";
import DefaultAuth from "../components/DefaultAuth";
import ForgotPassword from "../components/ForgotPassword";
import ConfirmForgotPassword from "../components/ConfirmForgotPassword";

const AuthScreen = () => {
  const { authState } = useAuthenticationContext();
  const theme = useColorScheme();
  const image = require("../../assets/chat-bubble.png");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        {
          backgroundColor: scheme[theme ? theme : "light"].background,
          paddingHorizontal: 15,
          paddingVertical: 15,
        },
        styles.container,
      ]}
    >
      <Image source={image} style={{ width: 150, height: 150 }} />
      {authState === "default" && <DefaultAuth />}
      {authState === "signIn" && <SignIn />}
      {authState === "signUp" && <SignUp />}
      {authState === "confirmSignUp" && <ConfirmSignUp />}
      {authState === "forgotPassword" && <ForgotPassword />}
      {authState === "confirmForgotPassword" && <ConfirmForgotPassword />}
      <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content"} />
    </KeyboardAvoidingView>
  );
};

const WrappedAuthScreen = () => {
  return (
    <AuthenticationProvider>
      <AuthScreen />
    </AuthenticationProvider>
  );
};

export default WrappedAuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
