import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import StyleGuide, { Theme, theme } from "../../components/StyleGuide";
const AnimatedSafeArea = Animated.createAnimatedComponent(SafeAreaView);

const SWITCH_TRACK_COLOR = {
  true: theme.light.muted,
  false: theme.dark.muted,
};

const ThemeScreen = () => {
  const [chatTheme, setChatTheme] = useState<Theme>("dark");
  return (
    <>
      <View style={styles.top}>
        <AnimatedSafeArea></AnimatedSafeArea>
      </View>
      <View style={styles.bottom}>
        <View style={[styles.circle]}>
          <Switch
            value={chatTheme === "dark"}
            onValueChange={(toggled) => {
              setChatTheme(toggled ? "dark" : "light");
            }}
            trackColor={SWITCH_TRACK_COLOR}
            thumbColor={
              chatTheme === "light" ? theme.light.tertiary : theme.dark.tertiary
            }
          />
        </View>
      </View>
    </>
  );
};

export default ThemeScreen;

const SIZE = Dimensions.get("window").width * 0.5;

const styles = StyleSheet.create({
  top: {
    flex: 2,
    backgroundColor: theme.dark.tertiary,
    padding: StyleGuide.spacing,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: -10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: SIZE,
    height: SIZE,
    backgroundColor: theme.dark.tertiary,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 8,
  },
  lightChat: {
    backgroundColor: theme.light.muted,
  },
});
