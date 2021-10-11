import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import StyleGuide from "../../components/StyleGuide";
import Card, { CardType } from "../../components/Card";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");
const origin = -(width / 2 - StyleGuide.spacing * 2);

type AnimationCardProps = {
  card: CardType;
  index: number;
  toggled: boolean;
};

const AnimatedCard = ({ card, index, toggled }: AnimationCardProps) => {
  const alpha = toggled ? ((index - 1) * Math.PI) / 6 : 0;

  const style = {
    transform: [
      { translateX: origin },
      {
        rotate: `${alpha}rad`,
      },
      { translateX: -origin },
    ],
  };

  return (
    <Animated.View style={[styles.container, style]}>
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
