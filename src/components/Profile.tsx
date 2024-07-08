import React, { FC } from "react";
import { ThemedView } from "../../themes/theme";
import CustomText from "./CustomText";
import { useAuthenticationContext } from "../context/AuthContext";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { UPLOAD_PRESET, CLOUD_NAME } from "@env";
import { updateUserProfileInDb } from "../utils/userfunctions";

type ProfileLogoProps = {
  firstName: string | null | undefined;
};

const Profile = () => {
  const { userFromDb, getLoggedInUserFromDb } = useAuthenticationContext();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      base64: true,
    });
    if (!result.canceled) {
      let base64img = `data:image/jpeg;base64,${result.assets[0].base64}`;
      const data = new FormData();
      data.append("file", base64img);
      data.append("upload_preset", UPLOAD_PRESET);
      data.append("cloud_name", CLOUD_NAME);
      uploadImageToCloudinary(data);
    }
  };

  const uploadImageToCloudinary = async (data: FormData) => {
    let url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: data
      })
      const fetchResponse = await response.json()
      userFromDb &&  await updateUserProfileInDb(userFromDb, fetchResponse.url);
      await getLoggedInUserFromDb();
    } catch (e) {
      console.log('Error while uploading image', e);
    }
  }
  const ProfileLogo: FC<ProfileLogoProps> = ({ firstName }) => {
    return (
      <ThemedView style={styles.logo}>
        {firstName && (
          <CustomText type="body" style={styles.letter}>
            {firstName[0]}
          </CustomText>
        )}
      </ThemedView>
    );
  };
  return (
    <ThemedView>
      <CustomText type="title" style={{ textAlign: "center" }}>
        Profile
      </CustomText>
      <TouchableOpacity onPress={async () => {
        await pickImage()
      }}>
        {
          userFromDb && (
            userFromDb.profilePicture ? (
              <Image source={{ uri: userFromDb.profilePicture }} style={styles.image} />
            ) : (
                <ProfileLogo firstName={userFromDb.firstName}/>
            )
          )
        }
      </TouchableOpacity>
      {userFromDb && (
        <CustomText type="body" style={{ fontWeight: "bold", textAlign: "center", fontSize: 25 }}>
          {userFromDb!.firstName} {userFromDb!.lastName}
        </CustomText>
      )}
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  logo: {
    marginVertical: 10,
    backgroundColor: "#327ba8",
    width: 150,
    height: 150,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 10,
    alignSelf: "center",
  },
  letter: {
    textAlign: "center",
    fontSize: 60,
    color: "white",
  },
});
