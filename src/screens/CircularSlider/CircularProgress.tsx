import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import StyleGuide from "../../components/StyleGuide";

type CircularProgressProps = {
  r: number;
  strokeWidth: number;
};
const CircularProgress = ({ r, strokeWidth }: CircularProgressProps) => {
  const radius = r - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

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

      <Circle
        cx={r}
        cy={r}
        stroke={StyleGuide.palette.primary}
        fill="transparent"
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference}, ${circumference}`}
      />
    </Svg>
  );
};

export default CircularProgress;

const styles = StyleSheet.create({});
