import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { canvas2Polar } from "react-native-redash";
import StyleGuide from "../../components/StyleGuide";
import ProgressCircle from "./ProgressCircle";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const size = SCREEN_WIDTH * 0.8;
const r = size / 2;
const center = { x: r, y: r };
const defaultTheta = canvas2Polar({ x: 0, y: 0 }, center).theta;

const CircularProgress = () => {
  const theta = useSharedValue<number>(defaultTheta);

  return (
    <View style={styles.container}>
      <View style={[styles.content]}>
        <ProgressCircle {...{ r, theta }} />
      </View>
    </View>
  );
};

export default CircularProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: StyleGuide.palette.background,
  },
  content: {
    width: size,
    height: size,
  },
});
