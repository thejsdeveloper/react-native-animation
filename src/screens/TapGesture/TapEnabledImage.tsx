import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
import StyleGuide from "../../components/StyleGuide";

const { width: SIZE } = Dimensions.get("window");
/* 
  <FontAwesome name="thumbs-o-up" size={24} color="black" />
  <FontAwesome name="thumbs-up" size={24} color="black" />
  <FontAwesome name="heart" size={24} color="black" />
  <FontAwesome name="heart" size={24} color="black" />
  */

const TapEnabledImage = () => {
  const dobleTapRef = React.useRef<TapGestureHandler | null>(null);

  const heartScale = useSharedValue(0);
  const likeScale = useSharedValue(0);

  const doubleTapHandler = () => {
    heartScale.value = withSpring(1, undefined, (finished) => {
      if (finished) {
        heartScale.value = withDelay(500, withSpring(0));
      }
    });
  };

  const rHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: clamp(heartScale.value, 0, 1),
        },
      ],
    };
  });

  const singleTapHandler = () => {
    likeScale.value = withSpring(1, undefined, (finished) => {
      if (finished) {
        likeScale.value = withDelay(500, withSpring(0));
      }
    });
  };

  const rLikeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: clamp(likeScale.value, 0, 1),
        },
      ],
    };
  });

  return (
    <TapGestureHandler onActivated={singleTapHandler} waitFor={dobleTapRef}>
      <TapGestureHandler
        onActivated={doubleTapHandler}
        numberOfTaps={2}
        maxDelayMs={250}
        ref={dobleTapRef}
      >
        <Animated.View style={[styles.container]}>
          <ImageBackground
            style={[styles.image]}
            source={require("../../../assets/images/monkey.jpg")}
          >
            <Animated.View style={[styles.animatedIcon, rHeartStyle]}>
              <FontAwesome name="heart" size={70} color="white" />
            </Animated.View>
            <Animated.View style={[styles.animatedIcon, rLikeStyle]}>
              <FontAwesome name="thumbs-up" size={70} color="white" />
            </Animated.View>
          </ImageBackground>
          <View style={styles.iconContainer}>
            <FontAwesome name="thumbs-o-up" size={24} color="black" />
            <Text style={styles.text}>123</Text>
          </View>
        </Animated.View>
      </TapGestureHandler>
    </TapGestureHandler>
  );
};

export default TapEnabledImage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: StyleGuide.spacing,
  },
  text: {
    paddingHorizontal: StyleGuide.spacing,
    ...StyleGuide.typography.body,
  },
  image: {
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  animatedIcon: {
    position: "absolute",
    shadowColor: "white",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 35,
  },
});
