import React, { FC, useEffect } from "react";
import { View } from "react-native";
import CustomText from "../components/CustomText";
import { useAuthenticationContext } from "../context/AuthContext";

type SplashScreenProps = {
  setisLoadingAuthUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const SplashScreen: FC<SplashScreenProps> = ({ setisLoadingAuthUser }) => {
  const { getLoggedInUser } = useAuthenticationContext();
  useEffect(() => {
    try {
      getLoggedInUser();
      setisLoadingAuthUser(false);
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
