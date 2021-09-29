import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyleGuide from "../../components/StyleGuide";

{
  /* 
  <FontAwesome5 name="thumbs-down" size={24} color="black" />
  <FontAwesome5 name="thumbs-up" size={24} color="black" />
  <FontAwesome name="heart" size={24} color="black" />
  <FontAwesome name="heart" size={24} color="black" />
  */
}
const TapToLike = () => {
  return (
    <View style={styles.container}>
      <Text>Tap To Like</Text>
    </View>
  );
};

export default TapToLike;

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.background,
  },
});
