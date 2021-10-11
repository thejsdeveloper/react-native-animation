import React from "react";
import { Pressable, StyleSheet, SafeAreaView, Text, View } from "react-native";
import StyleGuide from "../StyleGuide";

type ButtonProps = {
  label: string;
  onPress: () => void;
  primary?: boolean;
};

const Button = ({ label, onPress, primary = false }: ButtonProps) => {
  const color = primary ? "white" : undefined;
  const backgroundColor = primary ? StyleGuide.palette.primary : undefined;
  return (
    <Pressable onPress={onPress}>
      <SafeAreaView style={{ backgroundColor }}>
        <View style={styles.container}>
          <Text
            style={[styles.label, StyleGuide.typography.headline, { color }]}
          >
            {label}
          </Text>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: StyleGuide.spacing,
  },
  label: {
    textAlign: "center",
  },
});
