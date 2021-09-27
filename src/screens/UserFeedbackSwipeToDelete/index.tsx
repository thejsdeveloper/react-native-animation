import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StyleGuide from "../../components/StyleGuide";
import UserFeedbackSwipeRow from "./UserFeedbackSwipeRow";

const BUCKET_LIST: Task[] = [
  {
    id: "1",
    title: "Get Vegitables 🥦",
  },
  {
    id: "2",
    title: "Get Milk 🥛",
  },
  {
    id: "3",
    title: "Do not forget fruits 🍇",
  },
  {
    id: "4",
    title: "Flowers for wife 💐",
  },
  {
    id: "5",
    title: "Mangoes 🥭",
  },
  {
    id: "6",
    title: "Car Servicing 🚙",
  },
  {
    id: "7",
    title: "Go For run 🏃🏽‍♂️",
  },
  {
    id: "8",
    title: "Reading 📚",
  },
];
export type Task = {
  id: string;
  title: string;
};

const DemoSwipeToDeleteWithUserFeedback = () => {
  const scrollRef = React.useRef(null);

  const [tasks, setTasks] = React.useState(BUCKET_LIST);

  const onDismiss = React.useCallback((task: Task) => {
    setTasks((storedTask) => storedTask.filter((t) => t.id !== task.id));
  }, []);

  return (
    <ScrollView ref={scrollRef} style={styles.container}>
      {tasks.map((task) => (
        <UserFeedbackSwipeRow
          key={task.id}
          task={task}
          simultaneousHandlers={scrollRef}
          onDismiss={onDismiss}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.background,
  },
});
export default DemoSwipeToDeleteWithUserFeedback;
