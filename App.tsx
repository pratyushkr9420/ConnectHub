import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { useEffect, useState } from "react";
import { Hub } from "aws-amplify/utils";
import { AuthenticationProvider, useAuthenticationContext } from "./src/context/AuthContext";
import { PostsProvider } from "./src/context/PostsContext";
import { ChatsProvider  } from "./src/context/ChatsContext";
import SplashScreen from "./src/screens/SplashScreen";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthScreen from "./src/screens/AuthScreen";
import * as Notifications from 'expo-notifications';
Amplify.configure(amplifyconfig);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


const App = () => {
  const [isLoadingAuthUser, setisLoadingAuthUser] = useState(true);
  const { getLoggedInUser, getLoggedInUserFromDb, authUser, setAuthUser, setUserFromDb } = useAuthenticationContext();
  const listener = async ({ payload }: { payload: any }) => {
    switch (payload.event) {
      case "signedIn":
        await getLoggedInUser();
        await getLoggedInUserFromDb();
        break;
      case "signedOut":
        setAuthUser(undefined);
        setUserFromDb(undefined);
        break;
    }
  };
  const hubListenerCancelToken = Hub.listen("auth", listener);
  useEffect(() => {
    Hub.listen("auth", listener);
    return () => hubListenerCancelToken();
  }, []);

  useEffect(() => {
    (async () => {
      await getLoggedInUser();
      await getLoggedInUserFromDb();
    })();
  }, []);

  if (isLoadingAuthUser)
    return <SplashScreen setisLoadingAuthUser={setisLoadingAuthUser} />;
  return authUser ? <AppNavigator /> : <AuthScreen />;
};

const WrappedApp = () => {
  return (
    <AuthenticationProvider>
      <PostsProvider>
        <ChatsProvider>
          <App />
        </ChatsProvider>
      </PostsProvider>
    </AuthenticationProvider>
  );
};

export default WrappedApp;
