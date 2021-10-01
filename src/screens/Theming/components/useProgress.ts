import { useDerivedValue, withTiming } from "react-native-reanimated";
import { Theme } from "../../../components/StyleGuide";

export const useThemeProgress = (chatTheme: Theme) => {
  const progress = useDerivedValue(() => {
    return chatTheme === "dark" ? withTiming(1) : withTiming(0);
  }, [chatTheme]);

  return progress;
};
