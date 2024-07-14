import React, { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { ModelSortDirection, Notification } from "../API";
import { generateClient } from "aws-amplify/api";
import { notificationsByUserID } from "../graphql/queries";
import { UserFromDb } from "../utils/types";
import { Alert } from "react-native";
import { deleteNotificationInDb } from "../utils/notificationsFunctions";

type NotificationsContextType = {
    notifications: Notification[];
    isLoadingNotifications: boolean;
    fetchNotificationsByUser: (currentLoggedInUser: UserFromDb | null | undefined) => Promise<void>;
    fetchAdditionalNotificationsByUser: (currentLoggedInUser: UserFromDb | null | undefined) => Promise<void>;
    deleteNotification: (notificationToDelete: Notification) => Promise<void>;
}

const client = generateClient();

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

function useNotificationsContext() {
    const context = useContext(NotificationsContext);
    if (context === undefined) {
      throw new Error("useNotificationsContext must be used within a NotificationsProvider");
    }
    return context;
}

function NotificationsProvider({ children }: { children: ReactNode }): ReactElement {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isLoadingNotifications, setIsLoadingNotifications] = useState<boolean>(false);
    const [nextNotificationsToken, setNextNotificationsToken] = useState<string | null | undefined>(null);

    const fetchNotificationsByUser = async (currentLoggedInUser: UserFromDb | null | undefined) => {
        setIsLoadingNotifications(true);
        try {
            const response = await client.graphql({
                query: notificationsByUserID,
                variables: {
                    receiver: currentLoggedInUser!.id as string,
                    limit: 100,
                    sortDirection: ModelSortDirection.DESC,
                    nextToken: nextNotificationsToken ? nextNotificationsToken : null,
                }
            });
            setNotifications(response.data.notificationsByUserID.items);
            setNextNotificationsToken(response.data.notificationsByUserID.nextToken);
            setIsLoadingNotifications(false);
        } catch (e) {
            console.log("Error fetching posts");
            setIsLoadingNotifications(false);
        }
    };
    const fetchAdditionalNotificationsByUser = async (currentLoggedInUser: UserFromDb | null | undefined) => {
        if (nextNotificationsToken) {
            setIsLoadingNotifications(true);
            try {
                const response = await client.graphql({
                  query: notificationsByUserID,
                    variables: {
                        receiver: currentLoggedInUser!.id as string,
                        limit: 100,
                        sortDirection: ModelSortDirection.DESC,
                        nextToken: nextNotificationsToken
                  },
                });
                setNotifications((prev) => [...prev, ...response.data.notificationsByUserID.items]);
                setNextNotificationsToken(response.data.notificationsByUserID.nextToken);
                setIsLoadingNotifications(false);
              } catch (e) {
                console.log("Error fetching additional posts");
                setIsLoadingNotifications(false);
              }
        } else {
            Alert.alert("No more notifications to load");
        }
    }
    const addNotifications = async (newNotificaitons: Notification[]) => {
        setNotifications(prev => [...prev,...newNotificaitons]);
    }
      
    const deleteNotification = async (notificationToDelete: Notification) => {
        await deleteNotificationInDb(notificationToDelete);
        setNotifications(notifications.filter(notification => notification.id !== notificationToDelete.id));
    }
    return (
        <NotificationsContext.Provider
            value={{
                notifications,
                isLoadingNotifications,
                fetchNotificationsByUser,
                fetchAdditionalNotificationsByUser,
                deleteNotification,
            }}
        >
            {children}
        </NotificationsContext.Provider>
    )
}

export { NotificationsProvider, useNotificationsContext}