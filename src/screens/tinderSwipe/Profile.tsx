import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type ProfileModel = {
  id: string;
  name: string;
  age: number;
  profile: number;
};

const Profile = () => {
  return (
    <View>
      <Text>Profiles</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
