import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";
import Button from "../../components/Button";
import StyleGuide from "../../components/StyleGuide";
import ChatBubble from "./ChatBubble";

const ChatAnimationScreen = () => {
  const [play, setplay] = useState(false);
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    progress.value = withTiming(1);
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
