import React, { FC, useEffect } from "react";
import { View } from "react-native";
import CustomText from "../components/CustomText";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";
import {
  AuthenticationProvider,
  useAuthenticationContext,
} from "../context/AuthContext";

type WrappedSplashScreenProps = {
  setisLoadingAuthUser: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null | undefined>>;
};

type SplashScreenProps = {
  setisLoadingAuthUser: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null | undefined>>;
};

const SplashScreen: FC<SplashScreenProps> = ({
  setisLoadingAuthUser,
  setUser,
}) => {
  const { getLoggedInUser, authUser } = useAuthenticationContext();
  useEffect(() => {
    try {
      setisLoadingAuthUser(false);
      getCurrentUser();
      setUser(authUser);
    } catch (e) {
      console.log("Error logged in", e);
      setisLoadingAuthUser(false);
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <CustomText type="title">🕰</CustomText>
      <CustomText type="title">Loading...</CustomText>
    </View>
  );
};

const WrappedSplashScreen: FC<WrappedSplashScreenProps> = ({
  setisLoadingAuthUser,
  setUser,
}) => {
  return (
    <AuthenticationProvider>
      <SplashScreen
        setisLoadingAuthUser={setisLoadingAuthUser}
        setUser={setUser}
      />
    </AuthenticationProvider>
  );
};

export default WrappedSplashScreen;
