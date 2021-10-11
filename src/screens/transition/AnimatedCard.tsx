import React, { useDebugValue } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import StyleGuide from "../../components/StyleGuide";
import Card, { CardType } from "../../components/Card";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const origin = -(width / 2 - StyleGuide.spacing * 2);

type AnimationCardProps = {
  card: CardType;
  index: number;
  transition: Animated.SharedValue<number>;
};

const AnimatedCard = ({ card, index, transition }: AnimationCardProps) => {
  const rStyle = useAnimatedStyle(() => {
    const alpha = interpolate(
      transition.value,
      [0, 1],
      [0, ((index - 1) * Math.PI) / 6]
    );

    return {
      transform: [
        { translateX: origin },
        {
          rotate: `${alpha}rad`,
        },
        { translateX: -origin },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Card card={card} />
    </Animated.View>
  );
};

export default AnimatedCard;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: StyleGuide.spacing * 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
