import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import StyleGuide, { Theme, theme } from "../../components/StyleGuide";
import AnimatedText from "./components/AnimatedText";
import Conversation from "./components/Conversation";
const { width: SCREEN_WIDTH } = Dimensions.get("screen");
export type UserType = "owner" | "sender";
type ChatProps = {
  chatTheme?: Theme;
};
const Chat = ({ chatTheme = "dark" }: ChatProps) => {
  return (
    <>
      <Conversation chatTheme={chatTheme} style={[styles.container]}>
        <View style={[styles.replyContainer]}>
          <Animated.Text style={[styles.userName]}>Bob Harris</Animated.Text>
          <AnimatedText chatTheme={chatTheme} style={[styles.senderMessage]}>
            Good Morning! 👋
          </AnimatedText>
        </View>
        <AnimatedText chatTheme={chatTheme} style={[styles.message]}>
          Do you know what time it is ?
        </AnimatedText>
      </Conversation>
      <Conversation
        chatTheme={chatTheme}
        style={[styles.container]}
        type="owner"
      >
        <Text style={[styles.message]}>It's morning in India ☀️</Text>
      </Conversation>
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    maxWidth: SCREEN_WIDTH * 0.7,
    padding: 10,
    marginBottom: 10,
  },
  replyContainer: {
    borderLeftWidth: 3,
    borderColor: theme.dark.primary,
    paddingLeft: 8,
    marginBottom: 5,
  },
  userName: {
    ...StyleGuide.typography.title,
    color: theme.light.primary,
  },
  senderMessage: {
    ...StyleGuide.typography.body1,
  },
  message: {
    ...StyleGuide.typography.message,
  },
});
