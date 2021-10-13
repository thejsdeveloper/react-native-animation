import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyleGuide from "../../components/StyleGuide";

type CursorProps = {
  strokeWidth: number;
};
const Cursor = ({ strokeWidth }: CursorProps) => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        width: strokeWidth,
        height: strokeWidth,
        borderRadius: strokeWidth / 2,
        borderWidth: 5,
        borderColor: "#fff",
        backgroundColor: StyleGuide.palette.primary,
      }}
    />
  );
};

export default Cursor;

const styles = StyleSheet.create({});
