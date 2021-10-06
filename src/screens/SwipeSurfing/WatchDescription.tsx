import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";

type Props = {
  title: string;
  description: string;
  activeIndex: Animated.SharedValue<number>;
  index: number;
};

export const WatchDescription = ({
  title,
  description,
  activeIndex,
  index,
}: Props) => {
  const opacity = useDerivedValue(() => {
    return activeIndex.value === index ? 1 : 0;
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value),
    };
  });

  const rTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });
  return (
    <Animated.View style={[styles.descriptionContainer]}>
      <Animated.Text style={[styles.title, rTitleStyle]}>{title}</Animated.Text>
      <Animated.Text style={[styles.description, rStyle]}>
        {description}
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "700",
    marginBottom: 15,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    color: "lightgrey",
  },
});
