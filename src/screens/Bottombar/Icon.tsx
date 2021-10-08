import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";

export type IconName = "Home" | "Search" | "Message" | "Activity" | "Profile";

type IconProps = {
  name: IconName;
  onPress: () => void;
  active: boolean;
};

const getIcon = (name: IconName, active: boolean) => {
  switch (name) {
    case "Home":
      return (
        <Octicons
          name="home"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
    case "Search":
      return (
        <Feather
          name="search"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
    case "Message":
      return (
        <Ionicons
          name="chatbubbles-outline"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
    case "Activity":
      return (
        <Feather
          name="activity"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
    case "Profile":
      return (
        <AntDesign
          name="user"
          size={30}
          color={active ? StyleGuide.palette.telegramBlue : "black"}
        />
      );
  }
};

const Icon = ({ name, onPress, active }: IconProps) => {
  const rIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: active ? withTiming(-3) : withTiming(0),
        },
      ],
    };
  }, [active]);

  const rTextStyle = useAnimatedStyle(() => {
    return {
      opacity: active ? 0 : withTiming(1),
    };
  }, [active]);

  return (
    <TapGestureHandler onActivated={onPress}>
      <Animated.View style={[styles.iconContainer, rIconStyle]}>
        {getIcon(name, active)}
        <Animated.Text style={[styles.text, rTextStyle]}>{name}</Animated.Text>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    ...StyleGuide.typography.body1,
    color: "#000",
    marginTop: 5,
  },
});
