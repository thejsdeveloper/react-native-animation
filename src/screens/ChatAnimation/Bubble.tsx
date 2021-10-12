import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyleGuide from "../../components/StyleGuide";

const Bubble = () => {
  return <View style={styles.bubble} />;
};

export default Bubble;

const SIZE = 32;
const styles = StyleSheet.create({
  bubble: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: StyleGuide.palette.primary,
  },
});
