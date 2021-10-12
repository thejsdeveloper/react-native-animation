import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const BUBBLE_SIZE = SCREEN_WIDTH * 0.8;
const BUBBLE = [1, 2, 3];
const ChatBubble = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}></View>
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
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    backgroundColor: "#d3d3d3",
    borderTopLeftRadius: BUBBLE_SIZE / 2,
    borderTopRightRadius: BUBBLE_SIZE / 2,
    borderBottomLeftRadius: BUBBLE_SIZE / 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
