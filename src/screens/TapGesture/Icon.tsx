import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";

const ICON_SIZE = 24;
type IconName = "thumb" | "heart";
type IconType = "solid" | "hollow";

const getIcon = (name: IconName, size: number, type: IconType = "hollow") => {
  // console.log("getIcon");
  switch (name) {
    case "thumb":
      return (
        <FontAwesome
          name={`thumbs${type === "hollow" ? "-o" : ""}-up`}
          size={size}
          color="black"
        />
      );
    case "heart":
      return (
        <FontAwesome
          name={`heart${type === "hollow" ? "-o" : ""}`}
          size={size}
          color="black"
        />
      );
  }
};
type IconProps = {
  iconName: IconName;
  iconText: string | number;
  isActive: boolean;
};
const Icon = ({ iconName, iconText, isActive }: IconProps) => {
  // console.log("ICON ");
  const translateY = useDerivedValue(() => {
    return isActive ? -ICON_SIZE : 0;
  }, [isActive]);

  const opacity = useDerivedValue(() => {
    return isActive ? 1 : 0;
  }, [isActive]);

  const rSolidStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value),
        },
      ],
      opacity: withTiming(opacity.value),
    };
  });

  const rHollowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value),
        },
      ],
      opacity: withTiming(!!opacity.value ? 0 : 1),
    };
  });

  // const icon = React.useCallback(
  //   (name: IconName, size: number, type: IconType = "hollow") => {
  //     console.log("-----Callback-----");
  //     return getIcon(name, size, type);
  //   },
  //   []
  // );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.iconContainer, styles.top, rHollowStyle]}>
        {getIcon(iconName, ICON_SIZE)}
        <Text style={styles.text}>{iconText}</Text>
      </Animated.View>
      <Animated.View style={[styles.iconContainer, styles.bottom, rSolidStyle]}>
        {getIcon(iconName, ICON_SIZE, "solid")}
        <Text style={styles.text}>{iconText}</Text>
      </Animated.View>
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  top: {
    // backgroundColor: "red",
  },
  bottom: {
    // backgroundColor: "green",
  },
  text: {
    paddingHorizontal: StyleGuide.spacing,
    ...StyleGuide.typography.body,
  },
});
