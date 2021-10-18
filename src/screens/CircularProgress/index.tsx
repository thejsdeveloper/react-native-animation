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
  const buttonLabel = useDerivedValue(() => {
    return progress.value > 0 ? "Reset" : "Start";
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
          <View style={styles.circleContainer}>
            <ProgressCircle {...{ r, progress }} />
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
    height: size,
    width: size,
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
