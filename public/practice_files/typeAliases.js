"use strict";
// Lesson 9
// https://www.youtube.com/watch?v=AmpwfbdFYL8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=9
console.log('hey');
// quite complex
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
// quite complex
const greet3 = (user) => {
    console.log(`${user.name} says hello for the first time`);
};
// a repeat of the one above
const greetAgain = (user) => {
    console.log(`${user.name} says hello again`);
};
// now let's use the type alias:
const greetYetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
