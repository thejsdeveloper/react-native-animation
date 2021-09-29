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
  withSpring,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
import StyleGuide from "../../components/StyleGuide";
import Icon from "./Icon";

const { width: SIZE } = Dimensions.get("window");
export const ICON_SIZE = 24;

type ActionType =
  | "INCREASE_LIKE"
  | "DECREASE_LIKE"
  | "INCREASE_LOVE"
  | "DECREASE_LOVE"
  | "RESET";

type State = {
  isLiked: boolean;
  likes: number;
  isLoved: boolean;
  loved: number;
};
const reducer = (state: State, action: { type: ActionType }) => {
  switch (action.type) {
    case "INCREASE_LIKE": {
      return {
        ...state,
        likes: state.isLiked ? state.likes : state.likes + 1,
        isLiked: true,
      };
    }
    case "DECREASE_LIKE": {
      return {
        ...state,
        likes: state.likes - 1,
        isLiked: false,
      };
    }
    case "INCREASE_LOVE": {
      return {
        ...state,
        loved: state.isLoved ? state.loved : state.loved + 1,
        isLoved: true,
      };
    }
    case "DECREASE_LOVE": {
      return {
        ...state,
        loved: state.loved - 1,
        isLoved: false,
      };
    }
    case "RESET": {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

const INITIAL_STATE: State = {
  isLiked: false,
  likes: 0,
  isLoved: false,
  loved: 0,
};

const TapEnabledImage = () => {
  const dobleTapRef = React.useRef<TapGestureHandler | null>(null);

  const [{ likes, isLiked, loved, isLoved }, dispatch] = React.useReducer(
    reducer,
    INITIAL_STATE
  );

  const heartScale = useSharedValue(0);
  const likeScale = useSharedValue(0);
  const likeTranslateY = useSharedValue(0);

  const doubleTapHandler = useCallback(() => {
    dispatch({ type: "INCREASE_LOVE" });
    heartScale.value = withSpring(1, undefined, (finished) => {
      if (finished) {
        heartScale.value = withDelay(500, withSpring(0));
      }
    });
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
    likeScale.value = withSpring(1, undefined, (finished) => {
      if (finished) {
        likeScale.value = withDelay(500, withSpring(0));
      }
    });

    likeTranslateY.value = -ICON_SIZE;
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
