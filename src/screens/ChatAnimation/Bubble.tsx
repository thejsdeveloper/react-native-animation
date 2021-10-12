import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";

type BubbleProps = {
  progress: Animated.SharedValue<number>;
  start: number;
  end: number;
};
const Bubble = ({ progress, start, end }: BubbleProps) => {
  const rStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      progress.value,
      [start, end],
      [1, 1.2],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [
        {
          scale,
        },
      ],
    };
  });
  return <Animated.View style={[styles.bubble, rStyle]} />;
};

export default Bubble;

const SIZE = 32;
const styles = StyleSheet.create({
  bubble: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: StyleGuide.palette.primary,
  },
});
