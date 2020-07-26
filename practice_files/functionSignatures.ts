// Lesson 10
// https://www.youtube.com/watch?v=TZNbzyY6hMU&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=10

// we can specify a variable as a function:
let greet5: Function;

// function signatures can make a function definition more specific:
// it describes the structure, parameters, and type of data returned by the function
let greetSix: (a: string, b:string) => void;

// now that I have a function signature defined, I can fill in a function that
// meets its requirements like so:
greetSix = (name: string, greeting: string) => {
  // I cannot have a return value in here because I specified a return value of
  // "void" in the declaration above
  console.log(`Hello there, ${name} says: ${greeting}!`);
}

let calcOne: (a: number, b: number, c: string) => number;// <---------------//
//                                                                          //
calcOne = (numOne: number, numTwo: number, action: string) => {             //
// we could be more explicit if we wanted to:                               //
//........(numOne: number, numTwo: number, action: string): number => {     //
// but we don't have to because we already specified the return value must  //
// be a number above--------------------------------------------------------//
  if (action === 'add'){
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

console.log(`The result of the calculation is: ${calcOne(2, 3, 'add')}`);

// another example
let logDetailsThree: (obj: {name: string, age: number}) => void;

// logDetailsTwo = (ninja: {name: string, age: number}) => { ...
// ...this is getting too complicated, let's get a type alias in here:
type myPerson = {name: string, age: number};

logDetailsThree = (ninja: myPerson) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}
