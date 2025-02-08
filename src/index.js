const userName = "  Bhattu  "

// This is the function to trim all the whitespaces.
const trim = (name) => name.trim()

// This is the function convert the name to uppercase.
const upperCaseName = (name) => name.toUpperCase()

// This is a function to generate a greetings message.
const generateMessage = (name) => `Hello ${name}! Good Afternoon!`

// This is where we call the functions to get the desired result. Since we are calling multiple functions at the same time in a nested manner this is called as function composition. This has a issue, as the number of functions grow the number of the paranthesis and the complexity of the expression also grows. This affects the maintainability and readability of the code.
const result = generateMessage(upperCaseName(trim(userName)))

console.log(result)