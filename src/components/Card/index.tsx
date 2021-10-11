import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

const cards = {
  Card1: require("../../../assets/images/cards/Card1.png"),
  Card2: require("../../../assets/images/cards/Card2.png"),
  Card3: require("../../../assets/images/cards/Card3.png"),
  Card4: require("../../../assets/images/cards/Card4.png"),
};

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const RATIO = 16 / 9;
export const CARD_WIDTH = SCREEN_WIDTH * 0.8;
export const CARD_HEIGHT = CARD_WIDTH / RATIO;

type Index = 1 | 2 | 3 | 4;
export type CardType = `Card${Index}`;

type CardProps = {
  card: CardType;
};

const Card = ({ card }: CardProps) => {
  return <Image style={styles.card} source={cards[card]} />;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
  },
});
