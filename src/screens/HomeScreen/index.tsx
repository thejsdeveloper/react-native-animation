import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import StyleGuide from "../../components/StyleGuide";
import { Routes } from "../../navigation/Routes";

const screens = [
  {
    screen: "PanGesture",
    title: "💳 PanGesture",
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
            navigate(scrn.screen as keyof Routes);
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
    marginTop: StyleGuide.spacing,
    backgroundColor: "white",
    padding: StyleGuide.spacing * 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: StyleGuide.palette.background,
  },
  title: {
    ...StyleGuide.typography.headline,
  },
});
