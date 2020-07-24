"use strict";
// Lesson 4
// https://www.youtube.com/watch?v=157NopQ-chU&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=4
// We cannot make an array of one type (strings) then add elements to it that
// are of another data type (i.e. integers)
let namesTwo = ['ron', 'tom', 'dan', 'sam'];
// this will work but...
namesTwo.push('cat');
// this will NOT work
// names.push(12);
//=> objectsAndArrays.ts:11:12
//   - error TS2345: Argument of type '12' is not assignable to parameter of type 'string'.
// This will work just fine because we're adding an integer onto an array that
// already includes integers and numbers
let mixedDataTypes = [1, "tom", 3, "cat"];
mixedDataTypes.push(4);
mixedDataTypes.push("alf");
mixedDataTypes[0] = "1";
// NOW LET'S LOOK AT OBJECTS
// we cannot change the data type for any of values of these keys
let ninjaFour = {
    name: 'mario',
    belt: 'black',
    age: 30
};
// also, we cannot assign additional properties to this object once it has been
// declared initially... all we can do is rename all of the values, but we must
// rename ALL values, you cannot leave one out.
ninjaFour = {
    name: 'Joe',
    belt: 'Grey',
    age: 21
};
// this is cool:
ninjaFour.age = 23;
// this isn't allowed:
// ninja.age = "sam"
//=> objectsAndArrays.ts:36:1 - error TS2322: Type '"sam"' is not assignable to type 'number'.
