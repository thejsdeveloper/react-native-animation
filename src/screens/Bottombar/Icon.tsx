import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";

export type IconName = "home" | "search" | "message" | "activity" | "profile";

type IconProps = {
  type: IconName;
  onPress: () => void;
  active: boolean;
};

const getIcon = (active: boolean, type: IconName) => {
  switch (type) {
    case "home":
      return (
        <Octicons
          name="home"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
    case "search":
      return (
        <Feather
          name="search"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
    case "message":
      return (
        <Ionicons
          name="chatbubbles-outline"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
    case "activity":
      return (
        <Feather
          name="activity"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
    case "profile":
      return (
        <AntDesign
          name="user"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
  }
};

const Icon = ({ type, onPress, active }: IconProps) => {
  const translateY = useSharedValue<number>(0);

  const handlePress = () => {
    translateY.value = active ? withTiming(-10) : withTiming(0);
    onPress();
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <TapGestureHandler onActivated={handlePress}>
      <Animated.View style={[rStyle]}>{getIcon(active, type)}</Animated.View>
    </TapGestureHandler>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
