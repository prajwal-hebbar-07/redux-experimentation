import store from "./store/configureStore";
import { addEmployee } from "./store/employees";
import { addTask, completedTask, removeTask } from "./store/tasks";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTask({ task: "Task 1" }));

store.dispatch(addTask({ task: "Task 2" }));

store.dispatch(completedTask({ id: 1 }));

store.dispatch(addTask({ task: "Task 3" }));

store.dispatch(removeTask({ id: 2 }));

store.dispatch(addEmployee({ name: "Prajwal" }));

store.dispatch(addEmployee({ name: "Ankit" }));
