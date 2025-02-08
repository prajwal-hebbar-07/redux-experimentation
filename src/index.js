function greetings() {
  // Here we are returning a function for this function.
  return function() {
    console.log("Good Afternoon!")
  };
}

// Since we are are returning a function in the greetings function we need to make a function call to assign that function to the tempVariable.
const tempVariable = greetings()

// This will call the returned function from the greetings function.
console.log("Temp Variable Function Call:", tempVariable())

// This will just print out the function in the console.
console.log("Greetings Function: ", greetings())