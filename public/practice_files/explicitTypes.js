"use strict";
// explicit types: we can define the data type before assigning the variable a value:
var characterThree;
var age1;
var isLoggedIn;
// these all work:
characterThree = "Alf";
age1 = 34;
isLoggedIn = true;
// initialze an array of only one data type:
var ninjas;
ninjas = ["Alf", "Cat", "Jan"];
var samuraiIDs;
samuraiIDs = [12, 10, 2];
// union types:
var uid;
uid = "string";
uid = 34;
// union types for an array:
var mixedUp = [];
mixedUp = ["Tom", 12, "Dan", true,];
// you can declare a variable and set it to an object:
var ninjaOne;
// then the object can be defined however you'd like:
ninjaOne = { name: 'Yoshi', age: 30 };
// you can also declare the variable and specify the keys & values:
var ninjaTwo;
//...now the values cannot be set to a different data type
// NOTE THE SYNTAX DIFFERENCES ":" between the block above and trhe block below!
var ninjaThree = {
    name: 'mario',
    belt: 'black',
    age: 30
};
