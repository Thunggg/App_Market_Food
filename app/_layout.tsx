import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import AppProvider from "@/context/app.context";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <GluestackUIProvider mode="light">
        <AppProvider>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaProvider>
              <SafeAreaView
                className="flex-1"
                style={{
                  backgroundColor: colorScheme === "light" ? "#fff" : "#000",
                }}
                edges={["left", "right"]}
              >
                <ThemeProvider
                  value={colorScheme === "light" ? DefaultTheme : DarkTheme}
                >
                  <Stack>
                    <Stack.Screen
                      name="index"
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="(auth)/signup"
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="(auth)/login"
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="(auth)/verify"
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="(tabs)"
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen name="+not-found" />
                  </Stack>
                  <StatusBar
                    style="light"
                    backgroundColor="transparent"
                    translucent
                  />
                </ThemeProvider>
              </SafeAreaView>
            </SafeAreaProvider>
          </TouchableWithoutFeedback>
        </AppProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
