import React from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import StyleGuide from "../../components/StyleGuide";
import { FontAwesome5 } from "@expo/vector-icons";
import { Task } from ".";
import { clamp } from "react-native-redash";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const LIST_ITEM_HEIGHT = 60;
const TRASLATION_THRESHOLD = -0.2 * SCREEN_WIDTH;
type Contexttype = {
  offsetX: number;
};

type SwipeRowProps = Pick<PanGestureHandlerProps, "simultaneousHandlers"> & {
  task: Task;
  onDismiss: (task: Task) => void;
};
const UserFeedbackSwipeRow = ({
  task,
  simultaneousHandlers,
  onDismiss,
}: SwipeRowProps) => {
  const translateX = useSharedValue(0);
  const taskHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const taskMarginVertical = useSharedValue(StyleGuide.spacing);
  const taskOpacity = useSharedValue(1);

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
        TRASLATION_THRESHOLD,
        0
      );
    },
    onEnd: (_, ctx) => {
      const isRightSwipped = translateX.value > ctx.offsetX * (2 / 3);
      translateX.value = withTiming(isRightSwipped ? 0 : TRASLATION_THRESHOLD);
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
      opacity: withTiming(translateX.value < TRASLATION_THRESHOLD / 3 ? 1 : 0),
    };
  });

  const rRowContainerStyle = useAnimatedStyle(() => {
    return {
      height: taskHeight.value,
      marginVertical: taskMarginVertical.value,
      opacity: taskOpacity.value,
    };
  });

  const handleOnActivate = () => {
    taskHeight.value = withTiming(0);
    taskMarginVertical.value = withTiming(0);
    taskOpacity.value = withTiming(0, undefined, (finished) => {
      runOnJS(onDismiss)(task);
    });
  };

  return (
    <Animated.View style={[styles.rowContainer, rRowContainerStyle]}>
      <TapGestureHandler onActivated={handleOnActivate}>
        <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
          <FontAwesome5
            name={"trash-alt"}
            size={LIST_ITEM_HEIGHT * 0.4}
            color="#ff1a1a"
          />
          <Text style={styles.text}>Delete</Text>
        </Animated.View>
      </TapGestureHandler>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        {...{ onGestureEvent }}
      >
        <Animated.View style={[styles.task, rTaskStyle]}>
          <Text>{task.title}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default UserFeedbackSwipeRow;

const styles = StyleSheet.create({
  rowContainer: {
    width: "100%",
    alignItems: "center",
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: "absolute",
    top: 5,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: StyleGuide.spacing * 2.2,
  },
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ff1a1a",
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    height: LIST_ITEM_HEIGHT,
    width: 0.95 * SCREEN_WIDTH,
    backgroundColor: "white",
    paddingHorizontal: StyleGuide.spacing * 2.2,
    borderRadius: StyleGuide.spacing,
    shadowColor: "#4a4a4a",
    shadowOffset: {
      width: StyleGuide.spacing / 4,
      height: StyleGuide.spacing / 2,
    },
    shadowOpacity: 0.5,
  },
});
