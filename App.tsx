import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { useEffect, useState } from "react";
import { Hub } from "aws-amplify/utils";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";
import WrappedNavigator from "./src/navigation/AppNavigator";
import WrappedAuthScreen from "./src/screens/AuthScreen";
import WrappedSplashScreen from "./src/screens/SplashScreen";
Amplify.configure(amplifyconfig);

export default function App() {
  const [isLoadingAuthUser, setisLoadingAuthUser] = useState(true);
  const [user, setUser] = useState<AuthUser | null | undefined>();

  const listener = ({ payload }: { payload: any }) => {
    switch (payload.event) {
      case "signedIn":
        setUser(payload.data);
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
      const user = await getCurrentUser();
      setUser(user);
    })();
  }, []);

  if (isLoadingAuthUser)
    return <WrappedSplashScreen setUser={setUser} setisLoadingAuthUser={setisLoadingAuthUser} />;
  return user ? <WrappedNavigator /> : <WrappedAuthScreen />;
}
