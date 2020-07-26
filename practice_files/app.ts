// Left off on Lesson 14 - Modules
// https://www.youtube.com/watch?v=EpOPR03z4Vw&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=14
import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// these must implement the HasFormatter interface
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web-work', 250)
docTwo = new Invoice('mario', 'plumbing-work', 200)

// this array can only include elements that implement the HasFormatter interface
let docs: HasFormatter[] = [];
docs.push(docOne); // this Invoice instance implements the HasFormatter interface
docs.push(docTwo); // this Invoice instance implements the HasFormatter interface

console.log(docs);


// Lesson 15 - Interface
// https://www.youtube.com/watch?v=VbW6vWTaHOY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=15
// interfaces are not used to declare new instances of a class, but rather, to
// say that *if* a variable in the future that is declaring itself to be an
// "IsPerson" then it must have these variables & methods
interface IsPerson {
  // interface variables
  name: string;
  age: number;

  // interface method
  speak(a: string): void;
  spend(a: number): number;
}

// This does not produce an error because it precisely complies with the
// specifications laid out in the interface above
const me: IsPerson = {
  name: "Shawn",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  }
};

console.log(me);

// I can declare this new someone variable, and now it has to comply with
// the interface above
let someone: IsPerson

const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name, "it's great to be interfacing with you" );

}

greetPerson(me)


const personalInv1 = new Invoice("Tom", "work on website", 250)
const personalInv2 = new Invoice("Dan", "work on server", 350)

// right now, only objects created with the Invoice class can be added to this array
let invoices: Invoice[] = [];
invoices.push(personalInv1);
invoices.push(personalInv2);

// an array of the two invoices with modifications
console.log(invoices);

invoices.forEach(inv => {
  // this doesn't work with the class instance method "details" being private
  //console.log(inv.details);

  console.log(inv.format());
});
