import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  TapGestureHandler,
  GestureEvent,
  TapGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
import Header from "../../components/Header/Header";
import StyleGuide from "../../components/StyleGuide";
import Icon, { IconName } from "./Icon";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const TABS: IconName[] = ["Home", "Search", "Message", "Activity", "Profile"];

const TAB_WIDTH = SCREEN_WIDTH * 0.9;
const CIRCLE_SIZE = Math.floor(TAB_WIDTH / TABS.length);

const Bottombar = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(() => 0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(activeIndex * CIRCLE_SIZE),
        },
      ],
    };
  }, [activeIndex]);

  return (
    <LinearGradient
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 0,
      }}
      colors={["#C33764", "#1D2671"]}
      style={[styles.gradient]}
    >
      <Header title="Bottom tab Navigation" />

      <View style={[styles.bottomTab]}>
        <Animated.View style={[styles.circle, rStyle]}>
          <View style={styles.dot} />
        </Animated.View>
        {TABS.map((key, index) => (
          <Icon
            key={key}
            name={key}
            onPress={() => setActiveIndex(index)}
            active={activeIndex === index}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

export default Bottombar;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  bottomTab: {
    width: TAB_WIDTH,
    paddingVertical: 10,
    marginTop: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: "absolute",
    backgroundColor: "#fff",
    left: 0,
    bottom: 6,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  dot: {
    backgroundColor: StyleGuide.palette.telegramBlue,
    width: 8,
    height: 8,
    borderRadius: 999,
    marginBottom: 8,
  },
});
