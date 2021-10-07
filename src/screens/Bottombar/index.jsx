import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import Icon from "./Icon";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const Bottombar = () => {
  return (
    <LinearGradient
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 0,
      }}
      colors={["#C33764", "#1D2671"]}
      style={[styles.gradient]}
    >
      <Header title="Bottom tab Navigation" />
      <View style={styles.bottomTab}>
        <Icon type="home" />
        <Icon type="search" />
        <Icon type="message" />
        <Icon type="activity" />
        <Icon type="profile" />
      </View>
    </LinearGradient>
  );
};

export default Bottombar;

const TAB_WIDTH = SCREEN_WIDTH * 0.9;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  bottomTab: {
    width: TAB_WIDTH,
    height: 70,
    marginTop: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
