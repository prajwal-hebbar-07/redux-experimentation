import {compose, pipe} from "lodash/fp"

const userName = "  Bhattu  "

// This is the function to trim all the whitespaces.
const trim = (name) => name.trim()

// This is the function convert the name to uppercase.
const upperCaseName = (name) => name.toUpperCase()

// This is a function to generate a greetings message.
// In a situation where we want to add multiple aguments here it will fail by itself because the result of the upperCaseName function is a single argument and when it is passed to the generate message function it will fail if it has 2 arguments. But, we cannot directly convert the generateMessage function in the pipe function or the compose function to a function because these functions always expect a function as an argument. In such cases we can use the concept of function currying. 
// const generateMessage = (name) => `Hello ${name}! Good Afternoon!`
const generateMessage = message => name => `Hello ${name}! ${message}`

// This is where we call the functions to get the desired result. Since we are calling multiple functions at the same time in a nested manner this is called as function composition. This has a issue, as the number of functions grow the number of the paranthesis and the complexity of the expression also grows. This affects the maintainability and readability of the code.
// const prevResult = generateMessage(upperCaseName(trim(userName)))

// Using loadash we can make this complex expression into a simple one. For starters I will use compose function from loadash to solve the issue. but for this function I still need to give the function in the same order as before i.e., in the reverse order of execution.
const composeFunction = compose(generateMessage("Good Day!"), upperCaseName, trim)

const composeFunctionResult = composeFunction(userName)

// But the above method can get confusing since the order is reversed. To overcome this issue we will use the pipe function from loadash where we give the actual order of the functions on how it should be executed.
const pipeFunction = pipe(trim, upperCaseName, generateMessage("Good Evening!"))

const pipeFunctionResult = pipeFunction(userName)
console.log(pipeFunctionResult)