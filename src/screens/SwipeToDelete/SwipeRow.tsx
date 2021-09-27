import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";
import { clamp, withBouncing } from "react-native-redash";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

type Contexttype = {
  offsetX: number;
};

type SwipeRowProps = {
  id: string;
  title: string;
};
const SwipeRow = ({ title }: SwipeRowProps) => {
  const translateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Contexttype
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(
        ctx.offsetX + event.translationX,
        -SCREEN_WIDTH,
        0
      );
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View style={[styles.rowContainer, rStyle]}>
        <Text>{title}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SwipeRow;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    padding: StyleGuide.spacing * 2.2,
    margin: StyleGuide.spacing,
    borderRadius: StyleGuide.spacing,
    shadowColor: "#4a4a4a",
    shadowOffset: {
      width: StyleGuide.spacing / 4,
      height: StyleGuide.spacing / 2,
    },
    shadowOpacity: 0.5,
  },
});
