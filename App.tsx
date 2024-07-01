import { StatusBar } from "expo-status-bar";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { useEffect, useState } from "react";
import { Hub } from "aws-amplify/utils";
import SplashScreen from "./src/screens/SplashScreen";
import { AuthUser } from "aws-amplify/auth";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthScreen from "./src/screens/AuthScreen";
import { AuthenticationProvider } from "./src/context/AuthContext";
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

  if (isLoadingAuthUser)
    return <SplashScreen setisLoadingAuthUser={setisLoadingAuthUser} />;
  return user ? (
    <AuthenticationProvider>
      <AppNavigator />
    </AuthenticationProvider>
  ) : (
    <AuthenticationProvider>
      <AuthScreen />
    </AuthenticationProvider>
  );
}
