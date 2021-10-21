import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProfileModel } from "./Profile";

export const profiles: ProfileModel[] = [
  {
    id: "1",
    name: "Caroline",
    age: 24,
    profile: require("../assets/1.jpg"),
  },
  {
    id: "2",
    name: "Jack",
    age: 30,
    profile: require("../assets/2.jpg"),
  },
  {
    id: "3",
    name: "Anet",
    age: 21,
    profile: require("../assets/3.jpg"),
  },
  {
    id: "4",
    name: "John",
    age: 28,
    profile: require("../assets/4.jpg"),
  },
];

const Swipe = () => {
  return (
    <View>
      <Text>Swipe</Text>
    </View>
  );
};

export default Swipe;

const styles = StyleSheet.create({});
