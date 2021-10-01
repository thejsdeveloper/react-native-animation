import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, Switch, Dimensions } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import StyleGuide, { Theme, theme } from "../../components/StyleGuide";
import MiniChat from "./components/MiniChat";
const AnimatedSafeArea = Animated.createAnimatedComponent(SafeAreaView);

const ThemeScreen = () => {
  const [chatTheme, setChatTheme] = useState<Theme>("dark");

  const progress = useDerivedValue(() => {
    return chatTheme === "dark" ? withTiming(1) : withTiming(0);
  }, [chatTheme]);

  const rTopStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [theme.light.tertiary, theme.dark.tertiary]
    );
    return {
      backgroundColor,
    };
  });

  const handleThemeChange = useCallback((theme: Theme) => {
    setChatTheme(theme);
  }, []);

  return (
    <>
      <Animated.View style={[styles.top, rTopStyle]}></Animated.View>
      <View style={[styles.bottom]}>
        <LinearGradient
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 0,
          }}
          colors={["#667db6", "#0082c8", "#0082c8", "#667db6"]}
          style={[styles.gradient]}
        >
          <MiniChat
            onPress={handleThemeChange}
            active={chatTheme === "light"}
          />
          <MiniChat
            flavour="dark"
            onPress={handleThemeChange}
            active={chatTheme === "dark"}
          />
        </LinearGradient>
      </View>
    </>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  top: {
    flex: 2,
    padding: StyleGuide.spacing,
  },
  bottom: {
    flex: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: theme.dark.primary,
    marginTop: -15,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
