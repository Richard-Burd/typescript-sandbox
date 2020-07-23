// TypeScript uses straight types and JavaScript does not...
// i.e. when you declare a variable with a certain data type, the value of that
// variable cannot be changed to a different data type later on
const character2 = 'luigi';

console.log(character2);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
  console.log(input);
});

// we can define the data type the function expects
// if you input a string, the console will give you "NaN" but the terminal will
// not product an error at compile time.
const circ = (diameter: number) => {
  return diameter * Math.PI
}

console.log(circ(5.3));
