// What is a boolean
// They are either true / false

/*
x = 5 <- - - Never do this
var x = 5 <--- don't do this either
let x = 5 <--- When you might change the value
const x = 5 <--- when you want the value to stay the same
*/
// creating a new variable (2 steps)
// Declaration
let y;
// Initialization / variable assignment
y = 5;

// How can we make booleans?
let x = Boolean(5) // Function that turns something to a bool
x = Boolean(0) // reassignment
console.log(x)

let z = false
z = true
console.log(typeof z)

let result = 5 > 4
console.log(result)
/*
== checks for equality
>=
>
<=
<

&& returns true if both (a && b) are true
|| returns true if either (a || b) are true
*/
let flippedBool = !true
// console.log(flippedBool)
console.log(!true || false)

// Truthy // Falsey
// Truthy 'test', [1, 2], { test:5 }, 1
testResult = Boolean([1,2])
console.log(testResult)


// Falsey [], 0, "", {}, null, undefined, NaN
let falseyTest = Boolean([])
// if you try to turn an empty [], {}
// you get back true
console.log(falseyTest)

// Bonus
let boolConv = !!(0) // This is just for exposure
// Why are they useful?