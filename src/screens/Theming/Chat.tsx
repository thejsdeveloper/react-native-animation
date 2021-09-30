import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Palette, theme } from "../../components/StyleGuide";

type ChatProps = {
  theme: Palette;
};
const Chat = ({ theme }: ChatProps) => {
  return (
    <View>
      <View style={styles.reply}></View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  reply: {
    height: 100,
    width: 200,
    backgroundColor: theme.dark.muted,
  },
});
