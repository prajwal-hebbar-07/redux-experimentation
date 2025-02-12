const store = [
  {
    id: 1,
    task: "This is the first task",
    completed: false,
  },
];

// Add Actions

// We use payload so that the object for action will always be the same and key value pairs won't change on a parent level
const addTaskAction = {
  type: "ADD_TASK",
  payload: {
    task: "This is new Task!",
  },
};

const removeTaskAction = {
  type: "REMOVE_TASK",
  payload: {
    id: 1,
  },
};
