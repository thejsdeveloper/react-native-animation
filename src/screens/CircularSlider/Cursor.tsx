import React from "react";
import { StyleSheet, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { canvas2Polar, clamp, polar2Canvas } from "react-native-redash";
import StyleGuide from "../../components/StyleGuide";

const THRESHOLD = 0.001;

type CursorProps = {
  strokeWidth: number;
  r: number;
  theta: Animated.SharedValue<number>;
  backgroundColor: Animated.SharedValue<string | number>;
};

const Cursor = ({ strokeWidth, r, theta, backgroundColor }: CursorProps) => {
  const center = { x: r, y: r };
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offset: { x: number; y: number };
    }
  >({
    onStart: (_, ctx) => {
      ctx.offset = polar2Canvas({ theta: theta.value, radius: r }, center);
    },
    onActive: (event, ctx) => {
      const x = ctx.offset.x + event.translationX;
      const y1 = ctx.offset.y + event.translationY;
      let y: number;
      if (x < r) {
        y = y1;
      } else if (theta.value < Math.PI) {
        y = clamp(y1, 0, r - THRESHOLD);
      } else {
        y = clamp(y1, r, 2 * r);
      }
      const value = canvas2Polar({ x, y }, center).theta;
      theta.value = value > 0 ? value : 2 * Math.PI + value;
    },
  });

  const rStryle = useAnimatedStyle(() => {
    const { x, y } = polar2Canvas({ theta: theta.value, radius: r }, center);

    return {
      backgroundColor: backgroundColor.value,
      transform: [{ translateX: x }, { translateY: y }],
    };
  });

  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            width: strokeWidth,
            height: strokeWidth,
            borderRadius: strokeWidth / 2,
            borderWidth: 5,
            borderColor: "#fff",
            backgroundColor: StyleGuide.palette.primary,
          },
          rStryle,
        ]}
      />
    </PanGestureHandler>
  );
};

export default Cursor;

const styles = StyleSheet.create({});
