// Immutable Arrays

const numbers = [10, 20, 30, 40, 50];

// Adding items to the array can be done using the spread operator. If we want to add an element in the begging then start with the value and then use spread operator. Do the vice versa if you want to add the value in the end.
const newNumbers = [50, ...numbers];

console.log("Numbers: ", numbers);
console.log("New Numbers: ", newNumbers);

// Adding a value in the middle of the array when we know after which element we need to add the value. For this we need to use slice and not splice.
const index = numbers.indexOf(30);
const midNumbers = [...numbers.slice(0, index), 80, ...numbers.slice(index)];

console.log("Mid Numbers: ", midNumbers);

// Updating an item in the array. For this we use the array map method.
const updatedNumbers = numbers.map((number) => (number === 30 ? 80 : number));

console.log("Updated Numbers: ", updatedNumbers);

// Removing an item from the array. For this we will use the array filter method.
const removedNumbers = numbers.filter((number) => number !== 40);

console.log("Removed Numbers: ", removedNumbers);
