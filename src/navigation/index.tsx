import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  InitialState,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import AppLoading from "expo-app-loading";

import { ColorSchemeName } from "react-native";
import { Routes, SCREENS } from "./Routes";

import PanGesture from "../screens/PanGesture";
import HomeScreen from "../screens/HomeScreen";
import DemoSwipeToDelete from "../screens/SwipeToDelete";
import DemoSwipeToDeleteWithUserFeedback from "../screens/UserFeedbackSwipeToDelete";
import TapToLike from "../screens/TapGesture";
import ThemeScreen from "../screens/Theming";
import SwipeSurfing from "../screens/SwipeSurfing";

const Stack = createNativeStackNavigator<Routes>();

const NAVIGATION_KEY = "NAVIGATION_KEY";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const [isNavigationReady, setIsNavigationReady] = React.useState<boolean>(
    !__DEV__
  );

  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();

  const onStateChange = React.useCallback(
    (state) => AsyncStorage.setItem(NAVIGATION_KEY, JSON.stringify(state)),
    []
  );

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const storedState = await AsyncStorage.getItem(NAVIGATION_KEY);
        const navState = storedState ? JSON.parse(storedState) : undefined;
        setInitialState(navState);
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);

  if (!isNavigationReady) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...{ initialState, onStateChange }}
    >
      <StatusBar style="dark" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "RN Animations Examples",
          }}
        />

        {SCREENS.map((scr) => {
          const title = scr.title;
          console.log("title ->", title);
          return (
            <Stack.Screen
              key={scr.screen}
              name={scr.screen}
              component={scr.component}
              options={{
                title,
                headerShown: scr.showHeader,
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
