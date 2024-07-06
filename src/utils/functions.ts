import { generateClient } from "aws-amplify/api";
import { DeleteUserInput, UpdateUserInput } from "../API";
import { UserFromDb } from "./types";
import { deleteUser, updateUser } from "../graphql/mutations";

const client = generateClient();

export const convertLocationTypeToSave = (location: { latitude: number, longitude: number }) => {
  return {
    latitude: location.latitude.toString(),
    longitude: location.longitude.toString(),
  }
}

export const convertLocationTypeToUse = (location: { latitude: string, longitude: string }) => {
  return {
    latitude: Number(location.latitude),
    longitude: Number(location.longitude),
  }
}

export const updateUserProfileInDb = async (userFromDb : UserFromDb, updatedProfile: string) => {
    if (userFromDb) {
        const userDetails : UpdateUserInput= {
          id: userFromDb.id as string,
          profilePicture: updatedProfile,
        };
        try {
          await client.graphql({
            query: updateUser,
            variables: { input: userDetails }
          })
        } catch (e) {
          console.log('Error updating profile of user in db', e);
        }
    }
}
  
export const updateUserFirstNameInDb = async (userFromDb : UserFromDb, newFirstName: string) => {
    if (userFromDb) {
        const userDetails : UpdateUserInput= {
          id: userFromDb.id as string,
          firstName: newFirstName,
        };
        try {
          await client.graphql({
            query: updateUser,
            variables: { input: userDetails }
          })
        } catch (e) {
          console.log('Error updating first name of user in db', e);
        }
    }
}

  
export const updateUserLastNameInDb = async (userFromDb : UserFromDb, newLastName: string) => {
    if (userFromDb) {
        const userDetails : UpdateUserInput= {
          id: userFromDb.id as string,
          lastName: newLastName,
        };
        try {
          await client.graphql({
            query: updateUser,
            variables: { input: userDetails }
          })
        } catch (e) {
          console.log('Error updating last name of user in db', e);
        }
    }
}

export const updateUserStatusInDb = async (userFromDb : UserFromDb, newStatus: string) => {
  if (userFromDb) {
      const userDetails : UpdateUserInput= {
        id: userFromDb.id as string,
        status: newStatus,
      };
      try {
        await client.graphql({
          query: updateUser,
          variables: { input: userDetails }
        })
      } catch (e) {
        console.log('Error updating status of user in db', e);
      }
  }
}

export const updateUserLocationInDb = async (userFromDb: UserFromDb, updatedLocation: { latitude: number | null, longitude: number | null} | null ) => {
  if (userFromDb) {
    const userDetails : UpdateUserInput= {
      id: userFromDb.id as string,
      latitude: updatedLocation!.latitude? String(updatedLocation!.latitude) : null,
      longitude: updatedLocation!.longitude? String(updatedLocation!.longitude) : null,
    };
    try {
      const response = await client.graphql({
        query: updateUser,
        variables: { input: userDetails }
      })
    } catch (e) {
      console.log('Error updating location of user in db', e);
    }
  }
}

export const updateUserNotificationTokenInDb = async (userFromDb: UserFromDb, updatedNotificationToken: string | null ) => {
  if (userFromDb) {
    const userDetails : UpdateUserInput= {
      id: userFromDb.id as string,
      notificationToken: updatedNotificationToken,
    };
    try {
      const response = await client.graphql({
        query: updateUser,
        variables: { input: userDetails }
      })
    } catch (e) {
      console.log('Error updating notifcation token of user in db', e);
    }
  }
}

export const deleteUserFromDb = async (userFromDb: UserFromDb ) => {
  if (userFromDb) {
    const userDetails : DeleteUserInput= {
      id: userFromDb.id as string,
    };
    try {
      await client.graphql({
        query: deleteUser,
        variables: { input: userDetails }
      })
    } catch (e) {
      console.log('Error deleting user from db', e);
    }
  }
}