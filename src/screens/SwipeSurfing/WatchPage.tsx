import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
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
  const rImageStyle = useAnimatedStyle(() => {
    const progress = interpolate(
      translateX.value,
      [
        (index - 1) * SCREEEN_WIDTH,
        index * SCREEEN_WIDTH,
        (index + 1) * SCREEEN_WIDTH,
      ],
      [0, 0, 1],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        {
          rotate: `${progress * Math.PI}rad`,
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
      <Text style={styles.title}>{watch.title}</Text>
      <Text style={styles.description}>{watch.description}</Text>
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
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "700",
    marginBottom: 15,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    color: "lightgrey",
  },
});
