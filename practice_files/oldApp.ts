// Left off on Lesson 12 & 13 - Classes
// https://www.youtube.com/watch?v=OsFwOzr3_sE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=12

class Invoicing {
  client: string;

  // "private" means you cannot alter or see this class instance variable outside of the class
  private details: string;

  // "public" an access modifier; all class instance variables are public by default
  public amount: number;

  // "readonly" means you cannot write it outside the class
  readonly address: string;

  // this is repeditive and is not actually used if you have access modifiers in front
  // of each & every class instance variable--------------------------------------------
  constructor(c: string, d: string, a: number, b: string){
    this.client = c;
    this.details = d;
    this.amount = a;
    this.address = b;
  }
  format(){
    return `${this.client} owes $${this.amount} for ${this.details} at ${this.address}`
  }
}

// This is the ideal way to format an instance class:
class BetterInvoicing{
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){} // always remember you need these brackets!!!
}

const invOne = new Invoicing("Tom", "work on website", 250, "Elm St.")
const invTwo = new Invoicing("Dan", "work on server", 350, "Oak St.")

// right now, only objects created with the Invoicing class can be added to this array
let invoices: Invoicing[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// we can still modify these class instances because we don't have any access modifiers
invOne.client = "Tom"
invTwo.amount = 721
// an array of the two invoices with modifications
console.log(invoices);

invoices.forEach(inv => {
  // this doesn't work with the class instance method "details" being private
  //console.log(inv.details);

  console.log(inv.format());
});


// during development, TypeScript doesn't know if this anchor actually exists...
//........................................! <= if I know this exists-----//
const anchor = document.querySelector('a')!;                             //
if(anchor) {                                                             //
  console.log(anchor.href);                                              //
}                                                                        //
console.log(anchor.href); //  I don't need this error message down here--//
// NOTE: VisualStudio environment will show this error, but not Ubuntu + Atom

//const form = document.querySelector('form')!;
// we can't use the "!" when we select a class or id from the DOM,
// instead we must use typecasting and say "as" - something:
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,

    // "AsNumber" changes it from the default string to an integer (number)
    amount.valueAsNumber
  );
});
