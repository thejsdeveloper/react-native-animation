import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";
import FAIcon, { IconName, ICON_SIZE } from "./FAIcon";

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
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Animated.View style={[styles.iconContainer, rHollowStyle]}>
          <FAIcon name={iconName} />
          <Text style={styles.text}>{iconText}</Text>
        </Animated.View>
        <Animated.View style={[styles.iconContainer, rSolidStyle]}>
          <FAIcon name={iconName} type="solid" />
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
