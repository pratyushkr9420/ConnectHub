import React, { Fragment, useEffect } from "react";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import { useAuthenticationContext } from "../context/AuthContext";

const ProfileScreen = () => {
  const { handleSignOut, authUser, getLoggedInUser } =
    useAuthenticationContext();
  useEffect(() => {
    getLoggedInUser();
  }, []);
  return (
    <Fragment>
      <CustomText type="title">Welcome back! 🚀</CustomText>
      {authUser && <CustomText type="body">{authUser.username}</CustomText>}
      <CustomButton title="Sign Out" onPress={handleSignOut} />
    </Fragment>
  );
};

export default ProfileScreen;
