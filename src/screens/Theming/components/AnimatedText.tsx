import React from "react";
import { TextProps } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Theme, theme } from "../../../components/StyleGuide";
import { useThemeProgress } from "./useProgress";

type AnimatedTextProps = TextProps & {
  chatTheme?: Theme;
  children: React.ReactNode;
};

const AnimatedText = ({
  chatTheme = "dark",
  style,
  children,
  ...props
}: AnimatedTextProps) => {
  const progress = useThemeProgress(chatTheme);

  const rTextColor = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [theme.dark.tertiary, theme.light.tertiary]
    );

    return {
      color,
    };
  });

  return (
    <Animated.Text {...props} style={[style, rTextColor]}>
      {children}
    </Animated.Text>
  );
};

export default AnimatedText;
