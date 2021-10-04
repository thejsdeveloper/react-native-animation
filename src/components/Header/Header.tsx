import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import StyleGuide from "../StyleGuide";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
type HeaderProps = {
  title: string;
  gradientConfig?: {
    colors: string[];
  };
};

type MainHeaderProps = Pick<HeaderProps, "title">;

const MainHeader = ({ title }: MainHeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <Animated.View style={[styles.container]}>
      <Pressable
        onPress={() => {
          goBack();
        }}
      >
        <AntDesign name="arrowleft" size={30} color="white" />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  );
};

const Header = ({ title, gradientConfig }: HeaderProps) => {
  return (
    <SafeAreaView style={[styles.container]}>
      {gradientConfig ? (
        <LinearGradient
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 0,
          }}
          colors={gradientConfig.colors}
          style={[StyleSheet.absoluteFill, { justifyContent: "flex-end" }]}
        >
          <MainHeader title={title} />
        </LinearGradient>
      ) : (
        <MainHeader title={title} />
      )}
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  title: {
    ...StyleGuide.typography.title,
    color: "white",
    marginLeft: 10,
    fontSize: 20,
  },
});
