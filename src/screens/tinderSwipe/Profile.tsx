import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
      <Image style={styles.image} source={profile.profile} />
      {/* <View style={styles.overlay}>
        <View style={styles.header}></View>
        <View style={styles.footer}></View>
      </View> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 8,
  },
  overlay: {},
  header: {},
  footer: {},
});
