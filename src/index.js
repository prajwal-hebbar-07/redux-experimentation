// Objects and Arrays are always mutable it doesn't matter if it is declared using let or const. To predict the changes in the application we need to maintain immutability.

// Example of what I said above about Objects and arrays.

const person = {
  name: "Prajwal",
  age: 25,
};

// Even though it is declared using const we cannot change the value of the person, but we can change the property values inside the object.
person.name = "Hebbar";

// Similar thing applies to arrays. Since the elements are not stored but the reference to the array/object is stored. Example for array mutability.

const numbers = [1, 2, 3, 4, 5];

// A new number can still be pushed even though the array is declared using const.
numbers.push(6);
