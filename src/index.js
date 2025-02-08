function greetings() {
  return "Good Afternoon!";
}

// Pass the reference to the function to the message variable and hence the message will also become a function.
const message = greetings;

// As you can see in these console logs although we are calling 2 different functions both return the same value since the message has a reference to the function greetings.
console.log("Message Function: ", message());
console.log("Greetings Function: ", greetings());
