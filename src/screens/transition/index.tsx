import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSpring } from "react-native-redash";
import Button from "../../components/Button";
import { CardType } from "../../components/Card";
import StyleGuide from "../../components/StyleGuide";
import AnimatedCard from "./AnimatedCard";

const CARDS: CardType[] = ["Card1", "Card2", "Card3"];

const TransitionScreen = () => {
  const [toggled, setToggle] = useState(false);
  const transition = useSpring(toggled);

  return (
    <View style={styles.container}>
      {CARDS.map((card, index) => (
        <AnimatedCard key={card} {...{ card, index, transition }} />
      ))}
      <Button
        primary
        label={toggled ? "Reset" : "Start"}
        onPress={() => {
          setToggle((prev) => !prev);
        }}
      />
    </View>
  );
};

export default TransitionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: StyleGuide.palette.background,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: StyleGuide.palette.primary,
    padding: StyleGuide.spacing * 2,
  },
});
