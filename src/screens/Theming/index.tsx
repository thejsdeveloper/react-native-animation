import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import StyleGuide, { Theme, theme } from "../../components/StyleGuide";
import Chat from "./Chat";
import Header from "./components/Header";
import MiniChat from "./components/MiniChat";
import { useThemeProgress } from "./components/useProgress";

const ThemeScreen = () => {
  const [chatTheme, setChatTheme] = useState<Theme>("dark");

  const progress = useThemeProgress(chatTheme);

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
      <Animated.View style={[styles.top, rTopStyle]}>
        <Header chatTheme={chatTheme} />

        <Chat chatTheme={chatTheme} />
      </Animated.View>
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
