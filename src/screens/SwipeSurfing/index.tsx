import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import Header from "../../components/Header/Header";
import StyleGuide from "../../components/StyleGuide";
import { PAGES } from "./constants";
import Dot from "./Dot";
import { WatchDescription } from "./WatchDescription";
import WatchPage from "./WatchPage";
const { width: SCREEEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("screen");

const SwipeSurfing = () => {
  const translateX = useSharedValue<number>(0);
  const scrollRef = useAnimatedRef<ScrollView>();
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / SCREEEN_WIDTH);
  });

  const onIconPress = () => {
    if (activeIndex.value === PAGES.length) return;
    scrollRef.current?.scrollTo({ x: SCREEEN_WIDTH * (activeIndex.value + 1) });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Join with us!" />
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          ref={scrollRef as any}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScrollHandler}
          scrollEventThrottle={16}
        >
          {PAGES.map((page, index) => (
            <WatchPage
              key={page.title}
              watch={page}
              translateX={translateX}
              index={index}
            />
          ))}
        </Animated.ScrollView>
        {PAGES.map((page, index) => {
          return (
            <WatchDescription
              key={index.toString()}
              title={page.title}
              description={page.description}
              index={index}
              activeIndex={activeIndex}
            />
          );
        })}
      </View>
      <View style={styles.footer}>
        {/* paginator */}
        <View style={[styles.fillCenter, { flexDirection: "row" }]}>
          {PAGES.map((_, index) => {
            return (
              <Dot
                key={index.toString()}
                activeIndex={activeIndex}
                index={index}
              />
            );
          })}
        </View>
        {/* title */}
        <View style={[styles.fillCenter]}>
          <Text style={styles.text}>View Watch</Text>
        </View>
        {/* arrow */}
        <View style={[styles.fillCenter]}>
          <AntDesign
            name="arrowright"
            size={24}
            color="white"
            onPress={onIconPress}
          />
        </View>
      </View>
    </View>
  );
};

export default SwipeSurfing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.black,
  },

  footer: {
    height: 50,
    flexDirection: "row",
    marginBottom: 50,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  fillCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1.7,
    fontWeight: "500",
  },
});
