"use strict";
// Left off on Lesson 12 & 13 - Classes
// https://www.youtube.com/watch?v=OsFwOzr3_sE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=12
var Invoice = /** @class */ (function () {
    // this is repeditive and is not actually used if you have access modifiers in front
    // of each & every class instance variable--------------------------------------------
    function Invoice(c, d, a, b) {
        this.client = c;
        this.details = d;
        this.amount = a;
        this.address = b;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details + " at " + this.address;
    };
    return Invoice;
}());
// This is the ideal way to format an instance class:
var BetterInvoice = /** @class */ (function () {
    function BetterInvoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    } // always remember you need these brackets!!!
    return BetterInvoice;
}());
var invOne = new Invoice("Tom", "work on website", 250, "Elm St.");
var invTwo = new Invoice("Dan", "work on server", 350, "Oak St.");
// right now, only objects created with the Invoice class can be added to this array
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// we can still modify these class instances because we don't have any access modifiers
invOne.client = "Tom";
invTwo.amount = 721;
// an array of the two invoices with modifications
console.log(invoices);
invoices.forEach(function (inv) {
    // this doesn't work with the class instance method "details" being private
    //console.log(inv.details);
    console.log(inv.format());
});
// during development, TypeScript doesn't know if this anchor actually exists...
//........................................! <= if I know this exists-----//
var anchor = document.querySelector('a'); //
if (anchor) { //
    console.log(anchor.href); //
} //
console.log(anchor.href); //  I don't need this error message down here--//
// NOTE: VisualStudio environment will show this error, but not Ubuntu + Atom
//const form = document.querySelector('form')!;
// we can't use the "!" when we select a class or id from the DOM,
// instead we must use typecasting and say "as" - something:
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, 
    // "AsNumber" changes it from the default string to an integer (number)
    amount.valueAsNumber);
});
