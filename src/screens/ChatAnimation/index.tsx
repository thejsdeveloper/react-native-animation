import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import StyleGuide from "../../components/StyleGuide";
import ChatBubble from "./ChatBubble";

const ChatAnimationScreen = () => {
  const [play, setplay] = useState(false);
  return (
    <View style={styles.container}>
      <ChatBubble />
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
