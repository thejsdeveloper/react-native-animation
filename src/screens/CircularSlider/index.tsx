import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CircularSlider = () => {
  return (
    <View style={styles.container}>
      <Text>CircularSlider</Text>
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
});
