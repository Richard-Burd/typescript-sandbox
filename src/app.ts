// Left off on Lesson 12 - Classes
// https://www.youtube.com/watch?v=OsFwOzr3_sE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=12

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
