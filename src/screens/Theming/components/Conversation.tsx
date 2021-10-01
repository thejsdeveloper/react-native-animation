import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import StyleGuide, { Theme, theme } from "../../../components/StyleGuide";
import { UserType } from "../Chat";
import { useThemeProgress } from "./useProgress";

type ConversationProps = {
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  type?: UserType;
  children?: React.ReactNode;
  chatTheme?: Theme;
};

const Conversation = ({
  type = "sender",
  style,
  children,
  chatTheme = "dark",
}: ConversationProps) => {
  const bgColorRange =
    type === "sender"
      ? [theme.light.muted, theme.dark.muted]
      : [theme.light.primary, theme.light.primary];

  const alignSelf = type === "sender" ? "flex-start" : "flex-end";

  const progress = useThemeProgress(chatTheme);

  const rStyleContainer = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      bgColorRange
    );

    return {
      backgroundColor,
    };
  });

  return type === "owner" && chatTheme === "light" ? (
    <LinearGradient
      style={[
        {
          borderRadius: StyleGuide.spacing / 2,
          alignSelf,
        },
        style,
      ]}
      colors={["#0082c8", "#667db6"]}
    >
      {children}
    </LinearGradient>
  ) : (
    <Animated.View
      style={[
        {
          borderRadius: StyleGuide.spacing / 2,
          alignSelf,
        },
        style,
        rStyleContainer,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  container: {
    borderRadius: StyleGuide.spacing / 2,
  },
});
