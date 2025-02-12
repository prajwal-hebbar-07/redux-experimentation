import { addTask, removeTask } from "./action";
import store from "./store";

//store.dispatch({ type: "ADD_TASK", payload: { task: "Task 1" } });
// Since the dispatch method is big we need to create an action function which can be used to update the store.
store.dispatch(addTask("Task 1"));
console.log(store.getState());

store.dispatch(removeTask(1));
console.log(store.getState());
