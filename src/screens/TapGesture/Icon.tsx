import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
  onPress: () => void;
};
const Icon = ({ iconName, iconText, isActive, onPress }: IconProps) => {
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

  return (
    <Pressable {...{ onPress }}>
      <View style={styles.container}>
        <Animated.View style={[styles.iconContainer, rHollowStyle]}>
          {getIcon(iconName, ICON_SIZE)}
          <Text style={styles.text}>{iconText}</Text>
        </Animated.View>
        <Animated.View style={[styles.iconContainer, rSolidStyle]}>
          {getIcon(iconName, ICON_SIZE, "solid")}
          <Text style={styles.text}>{iconText}</Text>
        </Animated.View>
      </View>
    </Pressable>
  );
};

export default React.memo(Icon);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: 50,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    paddingHorizontal: StyleGuide.spacing,
    ...StyleGuide.typography.body,
  },
});
