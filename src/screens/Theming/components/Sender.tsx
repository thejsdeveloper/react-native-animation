import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
const xml = `<svg  viewBox="0 0 273 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 10C40 4.47715 44.4772 0 50 0H263C268.523 0 273 4.47715 273 10V52C273 57.5228 268.523 62 263 62H40V10Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.779 62C30.1348 58.4929 40 46.1671 40 31.5V62H16.779ZM1.22095 62C0.810612 61.8922 0.403566 61.7762 0 61.652V62H1.22095ZM39.9962 31H40V31.5C40 31.333 39.9987 31.1664 39.9962 31Z" />
</svg>`;

type SenderProps = {
  width?: number;
  height?: number;
  fill: string;
  style?: StyleProp<ViewStyle>;
};
const Sender = (props: SenderProps) => {
  return <SvgXml xml={xml} {...props} />;
};

export default Sender;

const styles = StyleSheet.create({});
