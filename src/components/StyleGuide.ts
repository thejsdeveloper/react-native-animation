const StyleGuide = {
  spacing: 8,
  shadow: 4,
  palette: {
    primary: "#3884ff",
    secondary: "#FF6584",
    tertiary: "#38ffb3",
    backgroundPrimary: "#d5e5ff", // === rgba(primary, 0.1)
    background: "#f2f2f2",
    border: "#f2f2f2",
    telegramBlue: "#0088cc",
    white: "#fff",
    darkgrey: "#22353c",
    darkerGrey: "#19272c",
    offWhite: "#E6E9EF",
  },

  typography: {
    body: {
      fontSize: 17,
      lineHeight: 20,
    },
    callout: {
      fontSize: 16,
      lineHeight: 20,
    },
    caption: {
      fontSize: 11,
      lineHeight: 13,
    },
    footnote: {
      fontSize: 13,
      lineHeight: 18,
      color: "#999999",
    },
    headline: {
      fontSize: 17,
      lineHeight: 22,
    },
    subhead: {
      fontSize: 15,
      lineHeight: 20,
    },
    title1: {
      fontSize: 34,
      lineHeight: 41,
    },
    title2: {
      fontSize: 28,
      lineHeight: 34,
    },
    title3: {
      fontSize: 22,
      lineHeight: 26,
    },
  },
};

export default StyleGuide;

export type Palette = {
  primary: string;
  secondary: string;
  tertiary: string;
  muted: string;
};
export type Theme = "dark" | "light";
export const theme: Record<Theme, Palette> = {
  dark: {
    primary: StyleGuide.palette.telegramBlue,
    secondary: StyleGuide.palette.white,
    tertiary: StyleGuide.palette.darkgrey,
    muted: StyleGuide.palette.darkerGrey,
  },
  light: {
    primary: StyleGuide.palette.telegramBlue,
    secondary: StyleGuide.palette.darkgrey,
    tertiary: StyleGuide.palette.white,
    muted: StyleGuide.palette.offWhite,
  },
};
