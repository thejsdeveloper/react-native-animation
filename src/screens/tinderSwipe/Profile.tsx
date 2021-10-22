import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type ProfileModel = {
  id: string;
  name: string;
  age: number;
  profile: number;
};

type ProfileProps = {
  profile: ProfileModel;
  onTop: boolean;
};

const Profile = ({ profile, onTop }: ProfileProps) => {
  return (
    <View style={[StyleSheet.absoluteFill]}>
      <View style={styles.overlay}>
        <View style={styles.header}></View>
        <View style={styles.footer}></View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  overlay: {},
  header: {},
  footer: {},
});
