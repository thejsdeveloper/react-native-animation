import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import StyleGuide from "../../components/StyleGuide";

type CircularProgressProps = {
  r: number;
  strokeWidth: number;
  theta: Animated.SharedValue<number>;
  backgroundColor: Animated.SharedValue<string | number>;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = ({
  r,
  strokeWidth,
  theta,
  backgroundColor,
}: CircularProgressProps) => {
  const radius = r - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const animatedProps = useAnimatedProps(() => {
    return {
      stroke: backgroundColor.value,
      strokeDashoffset: theta.value * radius,
    };
  });

  return (
    <Svg style={StyleSheet.absoluteFill}>
      <Circle
        cx={r}
        cy={r}
        stroke="white"
        fill="transparent"
        r={radius}
        strokeWidth={strokeWidth}
      />

      <AnimatedCircle
        animatedProps={animatedProps}
        cx={r}
        cy={r}
        stroke={StyleGuide.palette.primary}
        fill="transparent"
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
      />
    </Svg>
  );
};

export default CircularProgress;

const styles = StyleSheet.create({});
