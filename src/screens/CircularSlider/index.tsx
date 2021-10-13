import React from "react";
import { Dimensions, PixelRatio, StyleSheet, Text, View } from "react-native";
import Cursor from "./Cursor";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const size = SCREEN_WIDTH - 32;
const strokeWidth = 40;
const r = PixelRatio.roundToNearestPixel(size / 2);

const CircularSlider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={StyleSheet.absoluteFill}>
          <Text>Circular Progress</Text>
        </View>
        <Cursor {...{ strokeWidth }} />
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
    backgroundColor: "red",
  },
});
