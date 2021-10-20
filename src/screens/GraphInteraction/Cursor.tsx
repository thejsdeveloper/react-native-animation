import React from "react";
import { StyleSheet, Text, View } from "react-native";
const CURSOR = 100;

const Cursor = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.cursor}></View>
    </View>
  );
};

export default Cursor;

const styles = StyleSheet.create({
  cursor: {},
});
