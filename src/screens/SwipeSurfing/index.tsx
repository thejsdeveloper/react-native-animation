import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import StyleGuide from "../../components/StyleGuide";

const SwipeSurfing = () => {
  return (
    <View style={styles.container}>
      <Header title="Join with us!" />
    </View>
  );
};

export default SwipeSurfing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.black,
  },
});
