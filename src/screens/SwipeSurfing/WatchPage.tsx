import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { toRad } from "react-native-redash";
import StyleGuide from "../../components/StyleGuide";
import { PageType } from "./constants";
const { width: SCREEEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("screen");

type WatchPageProps = {
  watch: PageType;
  translateX: Animated.SharedValue<number>;
  index: number;
};

const WatchPage = ({ watch, translateX, index }: WatchPageProps) => {
  const inputRange = [
    (index - 1) * SCREEEN_WIDTH,
    index * SCREEEN_WIDTH,
    (index + 1) * SCREEEN_WIDTH,
  ];

  const rImageStyle = useAnimatedStyle(() => {
    const progress = interpolate(
      translateX.value,
      inputRange,
      [1, 0, 1],
      Extrapolate.CLAMP
    );

    const translateY = interpolate(
      translateX.value,
      inputRange,
      [100, 0, 0],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    const angle = `${progress * Math.PI}rad`;
    return {
      opacity,
      transform: [
        {
          rotate: angle,
        },
        {
          translateY: translateY,
        },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image
          style={[styles.image, rImageStyle]}
          source={watch.source}
        />
      </View>
    </View>
  );
};

export default WatchPage;

const styles = StyleSheet.create({
  container: {
    width: SCREEEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },

  image: {
    height: SCREEN_HEIGHT * 0.4,
    aspectRatio: 1,
  },
});
