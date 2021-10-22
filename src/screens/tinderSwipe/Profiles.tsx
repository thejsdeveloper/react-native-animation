import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import StyleGuide from "../../components/StyleGuide";
import { RectButton } from "react-native-gesture-handler";
import { ProfileModel } from "./Profile";

type ProfileProps = {
  profiles: ProfileModel[];
};

const Profiles = ({ profiles }: ProfileProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="user" size={32} color="gray" />
        <Icon name="message-circle" size={32} color="gray" />
      </View>
      <View style={styles.cards}></View>
      <View style={styles.footer}>
        <RectButton style={styles.circle}>
          <Icon name="x" size={32} color="#ec5288" />
        </RectButton>
        <RectButton style={styles.circle}>
          <Icon name="heart" size={32} color="#6ee3b4" />
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
    justifyContent: "space-evenly",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cards: {
    flex: 1,
    zIndex: 100,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
  },
});
