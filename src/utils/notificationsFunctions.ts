import { generateClient } from "aws-amplify/api";
import { UserFromDb } from "./types";
import { CreateNotificationMutation, Notification, NotificationType } from "../API";
import { createNotification, deleteNotification } from "../graphql/mutations";

const client = generateClient();

export async function sendPushNotification(pushNotificationToken: string, currentUserFromDb : UserFromDb, messageBody: string, dataToSend: any) {
    if (currentUserFromDb) {
        const message = {
            to: pushNotificationToken,
            sound: "default",
            title: `${currentUserFromDb.firstName ? currentUserFromDb.firstName : ""} ${currentUserFromDb.lastName ? currentUserFromDb.lastName : ""}`,
            body: messageBody,
            data: dataToSend,
          };
        
          await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Accept-encoding': 'gzip, deflate',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
          });
    }
}

export const createNotificationInDb = async (senderID: string= '', receiverID: string = '', type: NotificationType | null | undefined = null, postID: string = '', chatRoomID: string = '')=> {
  if (type) {
    try {
      const response = await client.graphql({
        query: createNotification,
        variables: {
            input: {
              notificationSenderId: senderID,
              receiver: receiverID,
              type,
              postID,
              chatRoomID,
            },
        },
      });
      console.log('Notification successfully created in database');
      return response.data.createNotification;
    } catch (e) {
      console.log("Error creating the notification in database", e);
    }
  } else {
    console.log("Invalid notifications type");
  }
}

export const deleteNotificationInDb = async (notificationToDelete: Notification) => {
  try {
    await client.graphql({
      query: deleteNotification,
      variables: {
        input: {
          id: notificationToDelete.id,
      }}
    })
    console.log("Notification deleted successfully from the database");
  } catch (e) {
    console.log('Error deleting user from db', e);
  }
}