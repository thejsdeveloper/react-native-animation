import React from "react";
import { Dimensions, PixelRatio, StyleSheet, Text, View } from "react-native";
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { canvas2Polar } from "react-native-redash";
import StyleGuide from "../../components/StyleGuide";
import CircularProgress from "./CircularProgress";
import Cursor from "./Cursor";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const size = SCREEN_WIDTH - 32;
const strokeWidth = 40;
const r = PixelRatio.roundToNearestPixel(size / 2);
const defaultTheta = canvas2Polar({ x: 0, y: 0 }, { x: r, y: r }).theta;

const CircularSlider = () => {
  const theta = useSharedValue(defaultTheta);
  const backgroundColor = useDerivedValue(() => {
    return interpolateColor(
      theta.value,
      [0, Math.PI, Math.PI * 2],
      ["#ff3884", StyleGuide.palette.primary, "#38ffb3"]
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={StyleSheet.absoluteFill}>
          <CircularProgress {...{ r, strokeWidth, theta, backgroundColor }} />
        </View>
        <Cursor
          {...{ strokeWidth, backgroundColor, theta }}
          r={r - strokeWidth / 2}
        />
      </View>
    </View>
  );
};

export default CircularSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: r * 2,
    height: r * 2,
  },
});
