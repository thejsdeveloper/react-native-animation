import { ImageProps } from "react-native";

export type PageType = Pick<ImageProps, "source"> & {
  title: string;
  description: string;
};

export const PAGES: PageType[] = [
  {
    title: "Walk with black",
    description:
      "Identify your requirement and set your goals accordingly to ensure maximum outreach and genuine responses.",
    source: require("../../../assets/images/watches/01.png"),
  },
  {
    title: "fly; Red boost",
    description:
      "Be with string bloods to take over your shot in the stylish world.",
    source: require("../../../assets/images/watches/02.png"),
  },
  {
    title: "run; White Wolf",
    description:
      "Become a ideal personal. Compete with the treands as you wish, May the fortune shine your life.",
    source: require("../../../assets/images/watches/02.png"),
  },
];
