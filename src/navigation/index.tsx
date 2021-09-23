import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { Routes } from "./Routes";

import LinkingConfiguration from "./LinkingConfiguration";
import PanGesture from "../screens/PanGesture";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator<Routes>();

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
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

        <Stack.Screen
          name="PanGesture"
          component={PanGesture}
          options={{
            title: "PanGesture",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
