import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import StyleGuide from "../../components/StyleGuide";
import { Routes } from "../../navigation/Routes";

const screens: {
  screen: keyof Routes;
  title: string;
}[] = [
  {
    screen: "PanGesture",
    title: "💳 PanGesture",
  },
  {
    screen: "SwipeToDelete",
    title: "🌊 Swipe To Delete",
  },
  {
    screen: "SwipeToDeleteWithUserFeedback",
    title: "🌊 Swipe To Delete with User feedback",
  },
  {
    screen: "TapGesture",
    title: "♥️ 👍🏽 Tap to like and love",
  },
  {
    screen: "Theming",
    title: "💅🏽 Change Theme",
  },
];

const HomeScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<Routes, "Home">>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {screens.map((scrn) => (
        <RectButton
          key={scrn.screen}
          onPress={() => {
            navigate(scrn.screen);
          }}
        >
          <View style={styles.thumbnail}>
            <Text style={styles.title}>{scrn.title}</Text>
          </View>
        </RectButton>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.background,
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: "white",
    padding: StyleGuide.spacing * 2,
    borderBottomWidth: 1,
    borderColor: StyleGuide.palette.background,
  },
  title: {
    ...StyleGuide.typography.headline,
  },
});
