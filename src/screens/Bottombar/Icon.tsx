import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ICON_MAP = {
  home: <Octicons name="home" size={24} color="black" />,
  search: <Feather name="search" size={24} color="black" />,
  message: <Ionicons name="chatbubbles-outline" size={24} color="black" />,
  activity: <Feather name="activity" size={24} color="black" />,
  profile: <AntDesign name="user" size={24} color="black" />,
};

type IconProps = {
  type: keyof typeof ICON_MAP;
};

const Icon = ({ type }: IconProps) => {
  return <View style={styles.iconContainer}>{ICON_MAP[type]}</View>;
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {},
});
