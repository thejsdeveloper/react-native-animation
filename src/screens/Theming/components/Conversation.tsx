import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

const senderXML = `<svg  viewBox="0 0 273 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 10C40 4.47715 44.4772 0 50 0H263C268.523 0 273 4.47715 273 10V52C273 57.5228 268.523 62 263 62H40V10Z"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.779 62C30.1348 58.4929 40 46.1671 40 31.5V62H16.779ZM1.22095 62C0.810612 61.8922 0.403566 61.7762 0 61.652V62H1.22095ZM39.9962 31H40V31.5C40 31.333 39.9987 31.1664 39.9962 31Z" />
</svg>`;

const ownerXML = `<svg  viewBox="0 0 273 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M233 10C233 4.47715 228.523 0 223 0H10C4.47715 0 0 4.47715 0 10V52C0 57.5228 4.47715 62 10 62H233V10Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M256.221 62C242.865 58.4929 233 46.1671 233 31.5V62H256.221ZM271.779 62C272.189 61.8922 272.596 61.7762 273 61.652V62H271.779ZM233.004 31H233V31.5C233 31.333 233.001 31.1664 233.004 31Z" />
</svg>
`;

type UserType = "owner" | "sender";

type ConversationProps = {
  fill: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  type?: UserType;
};
const Conversation = ({
  children,
  style,
  type = "sender",
  fill,
}: ConversationProps) => {
  const xml = type === "sender" ? senderXML : ownerXML;
  return (
    <View {...{ style }}>
      <SvgXml xml={xml} fill={fill} style={styles.svg} />
      {children}
    </View>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  svg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
  },
});
