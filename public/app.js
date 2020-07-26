import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// ListTemplate.ts instance
const ul = document.querySelector("ul"); // <= "!" means we're sure this node is present in the DOM
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
// Lesson 18 - Generics
// https://www.youtube.com/watch?v=IOzkOXSz9gE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=18
// Generics allow us to create reusable blocks of code which can be used with
// different types.
// let's take an object that has a name and age, and use a generic to add a random
// user ID (or uid) to that object
//const addUID = (obj: object) => {
//  let uid = Math.floor(Math.random() * 100);
//  return {...obj, uid};
//}
//let docOne = addUID({name: "yoshi", age: 40});
// this will work just fine...
//console.log(docOne);
// ...but this will not work with the TypeScript compiler
// because I cannot get a name on this property type:
//console.log(docOne.name);
// we solve this by adding a <T> for "type" and specify the data type being extended:
// const addWorkingUID = <T extends object>(obj: T) => {
// we can get more specific and say that this extends an object that has to have
// a name property with a value equal to a string data type:
const addWorkingUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docTwo = addWorkingUID({ name: "yoshi", age: 40 });
console.log(docTwo);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'sugar']
};
console.log(docThree, docFour);
// Lesson 19 Enums
// https://www.youtube.com/watch?v=r8G7-hQG07o&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=19
// ENUMS
// ...............{ THESE ARE RESOURCE TYPES     };
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
;
const docFive = {
    uid: 12934004,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docSix = {
    uid: 12934002,
    resourceType: ResourceType.AUTHOR,
    data: { title: 'name of the wind' }
};
console.log(docFive); // ........................... ResourceType[0]
console.log(docSix); // ............................ ResourceType[1]
// Lesson 20 Tuples
// https://www.youtube.com/watch?v=tHSstkiVbc8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=20
// Touples are like arrays but differ in that once the data types in the array have been declared
// in the initialization, those data types cannot change.
let myArray = [false, 23, "string"]; // this is an array...
myArray[0] = "I can be a string or any other data type"; // ... so this kind of reassignment is allowed.
// notice ":" as opposed to "=" used to define an array:
let myTuple = ["a string", 34, false];
myTuple[0] = "I have to be a string!";
