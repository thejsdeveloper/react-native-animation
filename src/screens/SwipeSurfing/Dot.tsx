import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type DotProps = {
  activeIndex: Animated.SharedValue<number>;
  index: number;
};
const Dot = ({ activeIndex, index }: DotProps) => {
  const rStyle = useAnimatedStyle(() => {
    const bgColor = activeIndex.value === index ? "white" : "transparent";
    return {
      backgroundColor: withTiming(bgColor, { duration: 200 }),
    };
  });

  return (
    <View style={[styles.dot]}>
      <Animated.View style={[styles.innerDot, rStyle]} />
    </View>
  );
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  innerDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});
