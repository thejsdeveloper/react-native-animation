import React from "react";
import HomeScreen from "../screens/HomeScreen";
import PanGesture from "../screens/PanGesture";
import SwipeSurfing from "../screens/SwipeSurfing";
import DemoSwipeToDelete from "../screens/SwipeToDelete";
import TapToLike from "../screens/TapGesture";
import ThemeScreen from "../screens/Theming";
import DemoSwipeToDeleteWithUserFeedback from "../screens/UserFeedbackSwipeToDelete";

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

type Screen = {
  screen: keyof Routes;
  title: string;
  component: React.ComponentType;
  showHeader: boolean;
};

const getScreen = (): Screen[] => {
  const showHeader = true;

  return [
    {
      screen: "PanGesture",
      title: "💳 PanGesture",
      component: PanGesture,
      showHeader,
    },
    {
      screen: "SwipeToDelete",
      title: "🌊 Swipe To Delete",
      component: DemoSwipeToDelete,
      showHeader,
    },
    {
      screen: "SwipeToDeleteWithUserFeedback",
      title: "🌊 Swipe To Delete with User feedback",
      component: DemoSwipeToDeleteWithUserFeedback,
      showHeader,
    },
    {
      screen: "TapGesture",
      title: "♥️ 👍🏽 Tap to like and love",
      component: TapToLike,
      showHeader,
    },
    {
      screen: "Theming",
      title: "💅🏽 Change Theme",
      component: ThemeScreen,
      showHeader: false,
    },
    {
      screen: "SwipeSurfing",
      title: "⌚️ Watch Gallery",
      component: SwipeSurfing,
      showHeader: false,
    },
  ];
};

export const SCREENS = getScreen();
