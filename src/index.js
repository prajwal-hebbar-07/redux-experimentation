// How to update Immutable Objects.

const person = {
  name: "Prajwal",
  age: 25,
};

// First method is to use Object.assign function to do this update.
const newPerson = Object.assign({}, person, { name: "Hebbar" });

console.log("Person: ", person);
console.log("New Person: ", newPerson);

const employee = {
  name: "Prajwal",
  age: 25,
  place: {
    country: "India",
    state: "Karnataka",
  },
};

// Second method is to use spread operator to update the object.
const newEmployee = {
  ...employee,
  name: "Hebbar",
  // To avoid updating the original object we need to use spread operator here as well.
  place: {
    ...employee.place,
    state: "Delhi",
  },
};

// If we try to update the newEmployee Object directly without spread operator it will also change the employee object since the reference for the employee object is stored.
// newEmployee.place.state = "Delhi";

console.log("Employee: ", employee);
console.log("New Employee: ", newEmployee);
