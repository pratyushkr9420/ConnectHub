import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ConfirmSignUp from "../components/ConfirmSignUp";
import { StyleSheet, View } from "react-native";
import { useAuthenticationContext } from "../context/AuthContext";

const AuthScreen = () => {
  const { authState } = useAuthenticationContext();
  return (
    <View style={styles.container}>
      {authState === "signIn" && <SignIn />}
      {authState === "signUp" && <SignUp />}
      {authState === "confirmSignUp" && <ConfirmSignUp />}
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
