import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import StyleGuide from "../../components/StyleGuide";
import TapEnabledImage from "./TapEnabledImage";

const TapToLike = () => {
  return (
    <View style={styles.container}>
      <TapEnabledImage />
    </View>
  );
};

export default TapToLike;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
    justifyContent: "center",
  },
});
