import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Dot = () => {
  return <View style={[styles.dot]}></View>;
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
});
