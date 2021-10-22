import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Profile, { ProfileModel } from "./Profile";

type SwipableProps = {
  onSwipe: () => void;
  profile: ProfileModel;
  onTop: boolean;
};
const Swipable = ({ profile, onTop, onSwipe }: SwipableProps) => {
  return <Profile profile={profile} onTop={onTop} />;
};

export default Swipable;

const styles = StyleSheet.create({});
