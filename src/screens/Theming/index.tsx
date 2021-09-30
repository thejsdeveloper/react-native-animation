import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Chat from "./Chat";
const AnimatedSafeArea = Animated.createAnimatedComponent(SafeAreaView);

const ThemeScreen = () => {
  return (
    <AnimatedSafeArea>
      <View style={styles.top}>
        <Chat />
      </View>
      <View style={styles.bottom}></View>
    </AnimatedSafeArea>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  top: {},
  bottom: {},
});
