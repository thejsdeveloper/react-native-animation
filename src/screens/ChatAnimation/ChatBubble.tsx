import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import Bubble from "./Bubble";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const BUBBLE_WIDTH = SCREEN_WIDTH * 0.8;
const BUBBLES = [1, 2, 3];
const DELTA = 1 / BUBBLES.length;
type ChatBubbleProps = {
  progress: Animated.SharedValue<number>;
};

const ChatBubble = ({ progress }: ChatBubbleProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        {BUBBLES.map((bubble, index) => {
          const start = index * DELTA;
          const end = start + DELTA;

          return <Bubble key={bubble} {...{ start, end, progress }} />;
        })}
      </View>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bubble: {
    width: BUBBLE_WIDTH,
    height: BUBBLE_WIDTH,
    flexDirection: "row",
    backgroundColor: "#d3d3d3",
    borderTopLeftRadius: BUBBLE_WIDTH / 2,
    borderTopRightRadius: BUBBLE_WIDTH / 2,
    borderBottomLeftRadius: BUBBLE_WIDTH / 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
