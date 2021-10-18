import React from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import {
  interpolateColor,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { canvas2Polar, ReText, useTiming } from "react-native-redash";
import StyleGuide from "../../components/StyleGuide";
import ProgressCircle from "./ProgressCircle";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const size = SCREEN_WIDTH * 0.7;
const r = size / 2;

const CircularProgress = () => {
  const progress = useSharedValue<number>(0);

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  const buttonLabel = useDerivedValue(() => {
    return progress.value > 0 ? "Reset" : "Start";
  });

  const backgroundColor = useDerivedValue(() => {
    return interpolateColor(
      progress.value,
      [0, 0.5, 1],
      ["#ff3884", StyleGuide.palette.primary, "#38ffb3"]
    );
  });

  const onButtonPress = React.useCallback(() => {
    progress.value = withTiming(progress.value ? 0 : 1, {
      duration: 2000,
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.content]}>
          <ReText style={styles.progressText} text={progressText} />
          <View style={styles.circleContainer}>
            <ProgressCircle {...{ r, progress, backgroundColor }} />
          </View>
        </View>

        <RectButton onPress={onButtonPress}>
          <SafeAreaView style={styles.button}>
            <ReText style={styles.label} text={buttonLabel} />
          </SafeAreaView>
        </RectButton>
      </View>
    </>
  );
};
//
export default CircularProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  circleContainer: {
    position: "absolute",
    height: size,
    width: size,
  },

  progressText: {
    textAlign: "center",
    color: StyleGuide.palette.primary,
    fontSize: 80,
  },
  button: {
    width: SCREEN_WIDTH,
    backgroundColor: StyleGuide.palette.primary,
  },

  label: {
    textAlign: "center",
    ...StyleGuide.typography.headline,
    color: "white",
    padding: StyleGuide.spacing,
  },
});
