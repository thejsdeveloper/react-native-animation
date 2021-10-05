import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/Header/Header";
import StyleGuide from "../../components/StyleGuide";
import { PAGES } from "./constants";
import WatchPage from "./WatchPage";

const SwipeSurfing = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Join with us!" />
      <ScrollView
        style={{ flex: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {PAGES.map((page) => (
          <WatchPage key={page.title} watch={page} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SwipeSurfing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.black,
  },
});
