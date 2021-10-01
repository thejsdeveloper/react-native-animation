import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

const xml = `<svg  viewBox="0 0 273 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M233 10C233 4.47715 228.523 0 223 0H10C4.47715 0 0 4.47715 0 10V52C0 57.5228 4.47715 62 10 62H233V10Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M256.221 62C242.865 58.4929 233 46.1671 233 31.5V62H256.221ZM271.779 62C272.189 61.8922 272.596 61.7762 273 61.652V62H271.779ZM233.004 31H233V31.5C233 31.333 233.001 31.1664 233.004 31Z" />
</svg>
`;
type SelfProps = {
  width?: number;
  height?: number;
  fill?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};
const Self = ({ children, ...props }: SelfProps) => {
  return (
    <SvgXml xml={xml} {...props}>
      {children}
    </SvgXml>
  );
};

export default Self;

const styles = StyleSheet.create({});
