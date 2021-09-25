import React, { useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import PanGesture, { PanGestureRectProps } from "./PanGesture";

const Demo = () => {
  const [dimensions, setDimensions] = useState<PanGestureRectProps | null>(
    null
  );

  const onLayoutHandler = (event: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: { width, height },
      },
    } = event;
    setDimensions({ width, height });
  };

  return (
    <View style={styles.container} onLayout={onLayoutHandler}>
      {dimensions && <PanGesture {...dimensions} />}
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
