import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import StyleGuide, { Theme, theme } from "../../../components/StyleGuide";
import Conversation from "./Conversation";

type MiniChatProps = {
  flavour?: Theme;
  onPress: (theme: Theme) => void;
  active: boolean;
};

const MiniChat = ({ flavour = "light", onPress, active }: MiniChatProps) => {
  const outputColor =
    flavour === "dark" ? theme.light.tertiary : theme.light.primary;

  const chatFlvouredTextStyle = {
    backgroundColor: theme[flavour].tertiary,
  };

  const progress = useDerivedValue(() => {
    return active ? withTiming(1) : withTiming(0);
  }, [active]);

  const rChatStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 1.2]);
    return {
      transform: [
        {
          scale,
        },
      ],
    };
  });

  const rInnerCircleStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.6]);
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ["transparent", outputColor]
    );

    return {
      transform: [
        {
          scale,
        },
      ],
      backgroundColor,
    };
  });

  const rOutCircleColor = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      progress.value,
      [0, 1],
      ["lightgrey", outputColor]
    );
    return {
      borderColor,
    };
  });

  return (
    <Pressable onPress={() => onPress(flavour)}>
      <Animated.View style={[styles.chat, chatFlvouredTextStyle, rChatStyle]}>
        <View style={styles.chatTop}>
          <Conversation
            style={[styles.chatText, styles.senderText]}
            imageStyle={{ tintColor: theme.light.muted }}
          />
          <Conversation
            type="owner"
            style={[styles.chatText, styles.ownerText]}
            imageStyle={{ tintColor: theme.light.primary }}
          />
          <Conversation
            style={[styles.chatText, styles.senderText]}
            imageStyle={{ tintColor: theme.light.muted }}
          />
        </View>
        <View style={styles.chatBottom}>
          <Animated.View style={[styles.circle, rOutCircleColor]}>
            <Animated.View style={[styles.innerCircle, rInnerCircleStyle]} />
          </Animated.View>
        </View>
      </Animated.View>
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
    marginRight: 50,
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
    padding: StyleGuide.spacing,
  },
  chatText: {
    height: 15,
    width: "70%",
    marginTop: 5,
  },
  senderText: {
    alignItems: "flex-start",
    tintColor: theme.light.muted,
  },
  ownerText: {
    alignSelf: "flex-end",

    // backgroundColor: theme.light.primary,
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
    borderWidth: 2.5,
    alignItems: "center",
    justifyContent: "center",
  },

  innerCircle: {
    width: SIZE,
    height: SIZE,
    borderRadius: 999,
  },
});
