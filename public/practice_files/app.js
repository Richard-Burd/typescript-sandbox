// Left off on Lesson 14 - Modules
// https://www.youtube.com/watch?v=EpOPR03z4Vw&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=14
import { Invoice } from './classes/Invoice.js';
// these must implement the HasFormatter interface
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web-work', 250);
docTwo = new Invoice('mario', 'plumbing-work', 200);
// this array can only include elements that implement the HasFormatter interface
let docs = [];
docs.push(docOne); // this Invoice instance implements the HasFormatter interface
docs.push(docTwo); // this Invoice instance implements the HasFormatter interface
console.log(docs);
// This does not produce an error because it precisely complies with the
// specifications laid out in the interface above
const me = {
    name: "Shawn",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
// I can declare this new someone variable, and now it has to comply with
// the interface above
let someone;
const greetPerson = (person) => {
    console.log('hello', person.name, "it's great to be interfacing with you");
};
greetPerson(me);
const personalInv1 = new Invoice("Tom", "work on website", 250);
const personalInv2 = new Invoice("Dan", "work on server", 350);
// right now, only objects created with the Invoice class can be added to this array
let invoices = [];
invoices.push(personalInv1);
invoices.push(personalInv2);
// an array of the two invoices with modifications
console.log(invoices);
invoices.forEach(inv => {
    // this doesn't work with the class instance method "details" being private
    //console.log(inv.details);
    console.log(inv.format());
});
