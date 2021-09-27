import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import StyleGuide from "../../components/StyleGuide";
import SwipeRow from "./SwipeRow";

const BUCKET_LIST = [
  {
    id: "1",
    title: "Get Vegitables 🥦",
  },
  {
    id: "2",
    title: "Get Milk 🥛",
  },
  {
    id: "3",
    title: "Do not forget fruits 🍇",
  },
  {
    id: "4",
    title: "Flowers for wife 💐",
  },
  {
    id: "5",
    title: "Mangoes 🥭",
  },
  {
    id: "6",
    title: "Car Servicing 🚙",
  },
  {
    id: "7",
    title: "Go For run 🏃🏽‍♂️",
  },
  {
    id: "8",
    title: "Reading 📚",
  },
];

const DemoSwipeToDelete = () => {
  return (
    <ScrollView style={styles.container}>
      {BUCKET_LIST.map((list) => (
        <SwipeRow key={list.id} {...list} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.background,
  },
});
export default DemoSwipeToDelete;
