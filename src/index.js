// import the produce function from the immer library.

import { produce } from "immer";

const person = {
  name: "Hebbar",
  age: 25,
  place: {
    country: "India",
    state: "Karnataka",
  },
};

// Previously we used different methods to update the objects in a immutable way and here we are going to use a library called as immer to do the job since Redux by default under the hood uses this library to do the task.

const newPerson = produce(person, (prevState) => {
  (prevState.name = "Prajwal"), (prevState.place.state = "Delhi");
});

console.log("Person: ", person);
console.log("New person: ", newPerson);
