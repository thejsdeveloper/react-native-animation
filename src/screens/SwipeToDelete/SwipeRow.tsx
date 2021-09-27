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
  withTiming,
} from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";
import { FontAwesome5 } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const LIST_ITEM_HEIGHT = 60;
const TRASLATION_THRESHOLD = -0.3 * SCREEN_WIDTH;
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
    onActive: (event) => {
      // This is to avoid right side swipe
      if (event.translationX < 0) {
        translateX.value = event.translationX;
      }
    },
    onEnd: () => {
      if (translateX.value < TRASLATION_THRESHOLD) {
        translateX.value = withTiming(-SCREEN_WIDTH);
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rTaskStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const rIconContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(translateX.value < TRASLATION_THRESHOLD ? 1 : 0),
    };
  });

  return (
    <Animated.View style={styles.rowContainer}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <FontAwesome5
          name={"trash-alt"}
          size={LIST_ITEM_HEIGHT * 0.4}
          color={"red"}
        />
      </Animated.View>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={[styles.task, rTaskStyle]}>
          <Text>{title}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default SwipeRow;

const styles = StyleSheet.create({
  rowContainer: {
    width: "100%",
    alignItems: "center",
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    position: "absolute",
    width: LIST_ITEM_HEIGHT,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: StyleGuide.spacing,
    marginHorizontal: StyleGuide.spacing * 2.2,
  },

  task: {
    flexDirection: "row",
    alignItems: "center",
    height: LIST_ITEM_HEIGHT,
    width: 0.95 * SCREEN_WIDTH,
    backgroundColor: "white",
    paddingHorizontal: StyleGuide.spacing * 2.2,
    marginVertical: StyleGuide.spacing,
    borderRadius: StyleGuide.spacing,
    shadowColor: "#4a4a4a",
    shadowOffset: {
      width: StyleGuide.spacing / 4,
      height: StyleGuide.spacing / 2,
    },
    shadowOpacity: 0.5,
  },
});
