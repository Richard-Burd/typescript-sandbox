"use strict";
// it is inferred that greet is now a function and cannot be reassigned to
// some other data type later on.
let greet = () => {
    console.log('Hey There!!');
};
// we can also set a new variable to a function with capital "F"
let greet2;
// the third variable (c) can be a number or string,
// the third variable (c) is optional "?"
const add = (a, b, c) => {
    console.log(a + b);
};
// the third parameter (c) has a default value of 10
const add2 = (a, b, c = 10) => {
    console.log(a + b);
};
add(5, 20);
// we can infer the type of variable,
const minus = (a, b) => {
    return a - b;
};
// we can also specify the data type of the return value
// here we specify it with ": number"
const minus2 = (a, b) => {
    return a - b; // this must now bw a number
};
let result = minus(10, 7);
