import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useCallback } from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
import StyleGuide from "../../components/StyleGuide";
import Icon from "./Icon";
import { INITIAL_STATE, reducer } from "./state";

const { width: SIZE } = Dimensions.get("window");
export const ICON_SIZE = 24;

const TapEnabledImage = () => {
  const dobleTapRef = React.useRef<TapGestureHandler | null>(null);

  const [{ likes, isLiked, loved, isLoved }, dispatch] = React.useReducer(
    reducer,
    INITIAL_STATE
  );

  const heartScale = useSharedValue(0);
  const likeScale = useSharedValue(0);

  const doubleTapHandler = useCallback(() => {
    dispatch({ type: "INCREASE_LOVE" });
    heartScale.value = withSequence(
      withSpring(1),
      withDelay(300, withSpring(0))
    );
  }, []);

  const rHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: clamp(heartScale.value, 0, 1),
        },
      ],
    };
  });

  const singleTapHandler = useCallback(() => {
    dispatch({ type: "INCREASE_LIKE" });

    likeScale.value = withSequence(
      withSpring(1),
      withDelay(300, withSpring(0))
    );
  }, []);

  const rLikeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: clamp(likeScale.value, 0, 1),
        },
      ],
    };
  });

  const onLikeIconPress = () => {
    if (isLiked) {
      dispatch({ type: "DECREASE_LIKE" });
    } else {
      dispatch({ type: "INCREASE_LIKE" });
    }
  };

  const onLoveIconPress = () => {
    if (isLoved) {
      dispatch({ type: "DECREASE_LOVE" });
    } else {
      dispatch({ type: "INCREASE_LOVE" });
    }
  };

  return (
    <View style={[styles.container]}>
      <Pressable onPress={() => dispatch({ type: "RESET" })}>
        <Ionicons name="ios-reload-circle-outline" size={40} color="black" />
      </Pressable>
      <TapGestureHandler onActivated={singleTapHandler} waitFor={dobleTapRef}>
        <TapGestureHandler
          onActivated={doubleTapHandler}
          numberOfTaps={2}
          maxDelayMs={250}
          ref={dobleTapRef}
        >
          <Animated.View>
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
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
      <View style={styles.iconContainer}>
        <Icon
          iconName="thumb"
          iconText={likes}
          isActive={isLiked}
          onPress={onLikeIconPress}
        />
        <Icon
          iconName="heart"
          iconText={loved}
          isActive={isLoved}
          onPress={onLoveIconPress}
        />
      </View>
    </View>
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
    margin: StyleGuide.spacing * 2,
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
