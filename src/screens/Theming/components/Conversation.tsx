import React from "react";
import {
  ImageBackground,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type UserType = "owner" | "sender";

type ConversationProps = {
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  type?: UserType;
};

const Conversation = ({
  type = "sender",
  style,
  imageStyle,
}: ConversationProps) => {
  const image =
    type === "sender"
      ? require("../../../../assets/images/sender.png")
      : require("../../../../assets/images/owner.png");

  return <ImageBackground {...{ style, imageStyle }} source={image} />;
};

export default Conversation;

const styles = StyleSheet.create({});
