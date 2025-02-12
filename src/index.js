import { addTask } from "./action";
import store from "./store";

store.dispatch(addTask("Task 1"));
// Since the dispatch method is big we need to create an action function which can be used to update the store.
console.log(store.getState());
