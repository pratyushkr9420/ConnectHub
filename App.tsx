import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { useEffect, useState } from "react";
import { Hub } from "aws-amplify/utils";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";
import { AuthenticationProvider, useAuthenticationContext } from "./src/context/AuthContext";
import SplashScreen from "./src/screens/SplashScreen";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthScreen from "./src/screens/AuthScreen";
import { CustomAuthUser } from "./src/utils/types";
Amplify.configure(amplifyconfig);

const App = () => {
  const [isLoadingAuthUser, setisLoadingAuthUser] = useState(true);
  const [user, setUser] = useState<CustomAuthUser | null | undefined>();
  const { getLoggedInUser, getLoggedInUserFromDb } = useAuthenticationContext();

  const listener = async ({ payload }: { payload: any }) => {
    switch (payload.event) {
      case "signedIn":
        setUser(await getLoggedInUser());
        break;
      case "signedOut":
        setUser(undefined);
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
      const user = await getLoggedInUser();
      setUser(user);
    })();
  }, []);

  if (isLoadingAuthUser)
    return <SplashScreen setUser={setUser} setisLoadingAuthUser={setisLoadingAuthUser} />;
  return user ? <AppNavigator /> : <AuthScreen />;
};

const WrappedApp = () => {
  return (
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  );
};

export default WrappedApp;
