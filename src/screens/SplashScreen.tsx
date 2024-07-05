import React, { FC, useEffect } from "react";
import { View } from "react-native";
import CustomText from "../components/CustomText";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";
import { AuthenticationProvider, useAuthenticationContext } from "../context/AuthContext";
import { CustomAuthUser } from "../utils/types";

type SplashScreenProps = {
  setisLoadingAuthUser: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<CustomAuthUser | null | undefined>>;
};

const SplashScreen: FC<SplashScreenProps> = ({ setisLoadingAuthUser, setUser }) => {
  const { getLoggedInUser, authUser } = useAuthenticationContext();
  useEffect(() => {
    try {
      setisLoadingAuthUser(false);
      getLoggedInUser();
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

export default SplashScreen;
