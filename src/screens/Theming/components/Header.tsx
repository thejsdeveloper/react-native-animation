import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import StyleGuide from "../../../components/StyleGuide";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../../../navigation/Routes";
import { useNavigation } from "@react-navigation/core";

const Header = () => {
  const { goBack } =
    useNavigation<NativeStackNavigationProp<Routes, "Theming">>();
  return (
    <SafeAreaView style={[styles.container]}>
      <LinearGradient
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 0,
        }}
        colors={["#667db6", "#0082c8", "#0082c8", "#667db6"]}
        style={[StyleSheet.absoluteFill, { justifyContent: "flex-end" }]}
      >
        <Animated.View style={[styles.container]}>
          <Pressable
            onPress={() => {
              goBack();
            }}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </Pressable>
          <Text style={styles.title}>Chat Theme</Text>
        </Animated.View>
      </LinearGradient>
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
