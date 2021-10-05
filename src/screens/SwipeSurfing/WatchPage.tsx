import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import StyleGuide from "../../components/StyleGuide";
import { PageType } from "./constants";
const { width: SCREEEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("screen");

type WatchPageProps = {
  watch: PageType;
};

const WatchPage = ({ watch }: WatchPageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={watch.source} />
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
    marginBottom: 60,
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
