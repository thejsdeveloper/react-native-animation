import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import StyleGuide, { Theme, theme } from "../../../components/StyleGuide";
import Self from "./Self";
import Sender from "./Sender";

type MiniChatProps = {
  flavour?: Theme;
  onPress: (theme: Theme) => void;
  active: boolean;
};

const MiniChat = ({ flavour = "light", onPress, active }: MiniChatProps) => {
  const circleBgColor =
    flavour === "dark" ? theme.light.tertiary : theme.light.primary;

  const circleOrderColor =
    flavour === "dark" ? theme.light.tertiary : theme.light.primary;

  const chatFlvouredTextStyle = {
    backgroundColor: theme[flavour].tertiary,
  };

  const scale = useDerivedValue(() => {
    return active ? withTiming(1.2) : withTiming(1);
  }, [active]);

  const rChatStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  const innerCircleScale = useDerivedValue(() => {
    return active ? withTiming(0.6) : withTiming(1);
  }, [active]);

  const rInnerCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      innerCircleScale.value,
      [0.6, 1],
      [circleBgColor, "transparent"]
    );

    return {
      transform: [
        {
          scale: innerCircleScale.value,
        },
      ],
      backgroundColor,
    };
  });

  const rOutCircleColor = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      innerCircleScale.value,
      [0.6, 1],
      [circleOrderColor, "lightgrey"]
    );
    return {
      borderColor,
    };
  });

  return (
    <Pressable onPress={() => onPress(flavour)}>
      <Animated.View style={[styles.chat, chatFlvouredTextStyle, rChatStyle]}>
        <View style={styles.chatTop}>
          <Sender
            fill={theme.light.muted}
            style={[styles.chatText, styles.senderText]}
          />
          <Self
            fill={theme.light.primary}
            style={[styles.chatText, styles.ownerText]}
          />
          <Sender
            fill={theme.light.muted}
            style={[styles.chatText, styles.senderText]}
          />
          {/* <View style={[styles.chatText, styles.senderText]} />
          <View style={[styles.chatText, styles.ownerText]} />
          <View style={[styles.chatText, styles.senderText]} /> */}
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
    height: 20,
    width: "70%",
  },
  senderText: {
    alignItems: "flex-start",
  },
  ownerText: {
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
