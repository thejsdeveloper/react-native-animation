import React from "react";
import Bottombar from "../screens/Bottombar";
import ChatAnimationScreen from "../screens/ChatAnimation";
import CircularProgress from "../screens/CircularProgress";
import CircularSlider from "../screens/CircularSlider";
import GraphInteraction from "../screens/GraphInteraction";
import PanGesture from "../screens/PanGesture";
import SwipeSurfing from "../screens/SwipeSurfing";
import DemoSwipeToDelete from "../screens/SwipeToDelete";
import TapToLike from "../screens/TapGesture";
import ThemeScreen from "../screens/Theming";
import TransitionScreen from "../screens/transition";
import DemoSwipeToDeleteWithUserFeedback from "../screens/UserFeedbackSwipeToDelete";

export type Routes = {
  Home: undefined;
  Transitions: undefined;
  ChatBubble: undefined;
  SwipeToDelete: undefined;
  SwipeToDeleteWithUserFeedback: undefined;
  TapGesture: undefined;
  SwipeSurfing: undefined;
  Theming: undefined;
  BottombarNavigation: undefined;
  PanGesture: undefined;
  Animations: undefined;
  CircularSlider: undefined;
  CircularProgress: undefined;
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
    {
      screen: "BottombarNavigation",
      title: "☞ 🛴 Bottom Tab",
      component: Bottombar,
      showHeader: false,
    },
    {
      screen: "Transitions",
      title: "💳 Card transition",
      component: TransitionScreen,
      showHeader,
    },
    {
      screen: "ChatBubble",
      title: "💬 Chat Bubble",
      component: ChatAnimationScreen,
      showHeader,
    },
    {
      screen: "CircularSlider",
      title: "⭕️ Circular Slider",
      component: CircularSlider,
      showHeader,
    },
    {
      screen: "CircularProgress",
      title: "⏰ Circular Progress",
      component: CircularProgress,
      showHeader,
    },
    {
      screen: "Graph",
      title: "⏰ Graph",
      component: GraphInteraction,
      showHeader,
    },
  ];
};

export const SCREENS = getScreen();
