export type Routes = {
  Home: undefined;
  Transitions: undefined;
  SwipeToDelete: undefined;
  SwipeToDeleteWithUserFeedback: undefined;
  TapGesture: undefined;
  SwipeSurfing: undefined;
  Theming: undefined;
  PanGesture: undefined;
  Animations: undefined;
  CircularSlider: undefined;
  Graph: undefined;
  DragToSort: undefined;
  DynamicSpring: undefined;
  Swiping: undefined;
  Bezier: undefined;
  ShapeMorphing: undefined;
  Accordion: undefined;
};

export const SCREENS: {
  screen: keyof Routes;
  title: string;
}[] = [
  {
    screen: "PanGesture",
    title: "💳 PanGesture",
  },
  {
    screen: "SwipeToDelete",
    title: "🌊 Swipe To Delete",
  },
  {
    screen: "SwipeToDeleteWithUserFeedback",
    title: "🌊 Swipe To Delete with User feedback",
  },
  {
    screen: "TapGesture",
    title: "♥️ 👍🏽 Tap to like and love",
  },
  {
    screen: "Theming",
    title: "💅🏽 Change Theme",
  },
  {
    screen: "Theming",
    title: "💅🏽 Change Theme",
  },
];
