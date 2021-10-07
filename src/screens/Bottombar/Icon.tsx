import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  GestureEvent,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

export type IconName = "home" | "search" | "message" | "activity" | "profile";
export const ICON_MAP: Record<IconName, React.ReactNode> = {
  home: <Octicons name="home" size={30} color="black" />,
  search: <Feather name="search" size={30} color="black" />,
  message: <Ionicons name="chatbubbles-outline" size={30} color="black" />,
  activity: <Feather name="activity" size={30} color="black" />,
  profile: <AntDesign name="user" size={30} color="black" />,
};

export const ICON_SIZE = 40;
type IconProps = {
  type: IconName;
  onPress: () => void;
  active: boolean;
};

const Icon = ({ type, onPress, active }: IconProps) => {
  const getIcon = () => {
    switch (type) {
      case "home":
        return (
          <Octicons name="home" size={30} color={active ? "blue" : "black"} />
        );
      case "search":
        return (
          <Feather name="search" size={30} color={active ? "blue" : "black"} />
        );
      case "message":
        return (
          <Ionicons
            name="chatbubbles-outline"
            size={30}
            color={active ? "blue" : "black"}
          />
        );
      case "activity":
        return (
          <Feather
            name="activity"
            size={30}
            color={active ? "blue" : "black"}
          />
        );
      case "profile":
        return (
          <AntDesign name="user" size={30} color={active ? "blue" : "black"} />
        );
    }
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.iconContainer}>{getIcon()}</View>
    </Pressable>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
