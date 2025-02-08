function greetings() {
  return "Good Afternoon!";
}

// As you can see here we are passing another function as argument which call be called inside this function.
function printMessage(anotherFunction) {
  console.log("Another Function as Argument: ", anotherFunction())
}

// Here for the printMessage function we are passing greetings function as argument.
printMessage(greetings)