import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import StyleGuide, { theme, Theme } from "../../../components/StyleGuide";
import { useThemeProgress } from "./useProgress";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {
  chatTheme: Theme;
};

const Header = ({ chatTheme }: HeaderProps) => {
  const progress = useThemeProgress(chatTheme);

  const rHeaderStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [theme.light.primary, theme.dark.muted]
    );

    return {
      backgroundColor,
    };
  });

  return (
    <SafeAreaView style={[styles.container]}>
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
        style={[StyleSheet.absoluteFill, { justifyContent: "flex-end" }]}
      >
        <Animated.View style={[styles.container]}>
          <AntDesign name="arrowleft" size={30} color="white" />
          <Text style={styles.title}>Chat Theme</Text>
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  title: {
    ...StyleGuide.typography.title,
    color: "white",
    marginLeft: 10,
    fontSize: 20,
  },
});
