import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import StyleGuide, { Theme, theme } from "../../components/StyleGuide";

type MiniChatProps = {
  flavour?: Theme;
  onPress: (theme: Theme) => void;
};

const MiniChat = ({ flavour = "light", onPress }: MiniChatProps) => {
  const chatFlvouredTextStyle = {
    backgroundColor: theme[flavour].tertiary,
  };
  const circleColor = {
    backgroundColor:
      flavour === "dark" ? theme.light.tertiary : theme.light.primary,
  };
  return (
    <Pressable onPress={() => onPress(flavour)}>
      <View style={[styles.chat, chatFlvouredTextStyle]}>
        <View style={styles.chatTop}>
          <View style={[styles.chatText, styles.senderText]} />
          <View style={[styles.chatText, styles.ownerText]} />
          <View style={[styles.chatText, styles.senderText]} />
        </View>
        <View style={styles.chatBottom}>
          <View style={[styles.circle, styles.lightCircle]}>
            <View style={[styles.innerCircle, circleColor]} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MiniChat;

const SIZE = 25;
const styles = StyleSheet.create({
  chat: {
    borderRadius: StyleGuide.spacing,
    width: 100,
    height: 150,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 8,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  lightChat: {
    backgroundColor: theme.light.tertiary,
  },
  darkChat: {
    backgroundColor: theme.dark.muted,
  },
  chatTop: {
    flex: 2,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  chatText: {
    height: 20,
    width: "70%",
    borderRadius: 5,
    marginBottom: 5,
  },

  senderText: {
    backgroundColor: theme.light.muted,
    alignItems: "flex-start",
  },

  ownerText: {
    backgroundColor: theme.light.primary,
    alignSelf: "flex-end",
  },
  chatBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: 999,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  lightCircle: {
    borderColor: "lightgrey",
  },
  innerCircle: {
    width: SIZE * 0.7,
    height: SIZE * 0.7,
    borderRadius: 999,
  },
});
