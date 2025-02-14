import store from "./store";
import {
  addTask,
  completedTask,
  fetchTodo,
  removeTask,
} from "./store/configureStore";

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(addTask({ task: "Task 1" }));
store.dispatch(addTask({ task: "Task 2" }));

store.dispatch(completedTask({ id: 2 }));

unsubscribe();

store.dispatch(removeTask({ id: 1 }));
store.dispatch(fetchTodo());
console.log("Normal Console Log: ", store.getState());
