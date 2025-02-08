// Pure Functions are those function which will always give the same output for the same input. The reducer functions in Redux should always be pure functions.

// Example for a pure function.
function add2(a) {
    return a + 2
}

// Example for impure functions.
function addRandom(a) {
    return a + Math.random()
}

const x = 12

// The following is also not a pure function since if the value that is globally declared changes then the output will also change for the same input. In pure functions all the variables should be passed as parameters.
function addX(a) {
    return a + x
}