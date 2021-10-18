import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import StyleGuide from "../../components/StyleGuide";

const STROKE_WIDTH = 16;
const PROGRESS_STROKE_WIDTH = STROKE_WIDTH / 2;
const BACKGROUND_STROKE_COLOR = "#303858";
const STROKE_COLOR = "#A6E1FA";

type ProgressCircleProps = {
  theta: Animated.SharedValue<number>;
  r: number;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ProgressCircle = ({ theta, r }: ProgressCircleProps) => {
  const radius = r - STROKE_WIDTH / 2;
  const circumsference = 2 * Math.PI * r;

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: theta.value * radius,
    };
  });
  return (
    <Svg>
      <Circle
        cx={r}
        cy={r}
        r={radius}
        strokeDasharray={circumsference}
        stroke={"white"}
        fill="transparent"
        strokeWidth={STROKE_WIDTH}
      />

      <AnimatedCircle
        animatedProps={animatedProps}
        cx={r}
        cy={r}
        r={radius}
        strokeDasharray={circumsference}
        stroke={StyleGuide.palette.primary}
        fill="transparent"
        strokeWidth={PROGRESS_STROKE_WIDTH}
        strokeLinecap={"round"}
      />
    </Svg>
  );
};

export default ProgressCircle;

const styles = StyleSheet.create({});
