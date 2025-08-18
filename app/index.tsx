import { useCurrentApp } from "@/context/app.context";
import { getAccountAPI } from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootPage = () => {
  const { setAppState } = useCurrentApp();

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        const res = await getAccountAPI();

        if (res.data) {
          //success
          setAppState({
            user: res.data.user,
            access_token: await AsyncStorage.getItem("access_token"),
          });
          router.replace("/(tabs)");
        } else {
          //error
          router.replace("/(auth)/welcome");
        }
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return <></>;
};

export default RootPage;
