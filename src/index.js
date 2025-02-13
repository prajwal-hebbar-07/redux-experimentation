import store from "./store";
import { addTask, completeTask, removeTask } from "./store/configureStore";

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(addTask("Task 1"));
store.dispatch(addTask("Task 2"));

store.dispatch(completeTask(2));

unsubscribe();

store.dispatch(removeTask(1));
console.log("Normal Console Log: ", store.getState());
