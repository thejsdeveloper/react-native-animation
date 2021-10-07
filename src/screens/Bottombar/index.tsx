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
import Icon, { IconName, ICON_MAP, ICON_SIZE } from "./Icon";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const SIZE = ICON_SIZE * 2;
const TAB_WIDTH = SCREEN_WIDTH * 0.9;

const Bottombar = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(() => 0);
  const translateX = useSharedValue<number>(0);

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

      <Animated.View style={[styles.bottomTab]}>
        <Animated.View style={[styles.circle]} />
        {Object.keys(ICON_MAP).map((key, index) => (
          <Icon
            key={key}
            type={key as IconName}
            onPress={() => setActiveIndex(index)}
            active={activeIndex === index}
          />
        ))}
      </Animated.View>
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
    height: 70,
    marginTop: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    position: "absolute",
    backgroundColor: "green",
    // left: 10,
    bottom: 5,
  },
});
