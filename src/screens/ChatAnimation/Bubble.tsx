import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";

type BubbleProps = {
  progress: Animated.SharedValue<number>;
  start: number;
  end: number;
};
const Bubble = ({ progress, start, end }: BubbleProps) => {
  return <Animated.View style={styles.bubble} />;
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
