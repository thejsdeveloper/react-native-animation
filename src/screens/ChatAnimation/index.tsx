import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Button from "../../components/Button";
import StyleGuide from "../../components/StyleGuide";
import ChatBubble from "./ChatBubble";

const easing = Easing.inOut(Easing.ease);

const ChatAnimationScreen = () => {
  const [play, setplay] = useState(false);
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing,
      }),
      -1,
      true
    );
  }, [play]);

  return (
    <View style={styles.container}>
      <ChatBubble {...{ progress }} />
      <Button
        primary
        label={play ? "Pause" : "Play"}
        onPress={() => {
          setplay((prev) => !prev);
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
