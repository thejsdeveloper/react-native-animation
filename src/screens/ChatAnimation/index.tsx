import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";
import Button from "../../components/Button";
import StyleGuide from "../../components/StyleGuide";
import ChatBubble from "./ChatBubble";

const easing = Easing.inOut(Easing.ease);

const ChatAnimationScreen = () => {
  const [play, setPlay] = useState(false);
  const paused = useSharedValue(!play);
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    progress.value = withPause(
      withRepeat(withTiming(1, { duration: 1000, easing }), -1, true),
      paused
    );
  }, [progress, paused]);

  return (
    <View style={styles.container}>
      <ChatBubble {...{ progress }} />
      <Button
        primary
        label={play ? "Pause" : "Play"}
        onPress={() => {
          setPlay((prev) => !prev);
          paused.value = !paused.value;
        }}
      />
    </View>
  );
};

export default ChatAnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: StyleGuide.palette.background,
  },
});
