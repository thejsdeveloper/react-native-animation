import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import StyleGuide from "../../components/StyleGuide";

const ChatBubble = () => {
  const [play, setplay] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Chat Bubble</Text>
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

export default ChatBubble;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: StyleGuide.palette.background,
  },
});
