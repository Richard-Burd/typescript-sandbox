"use strict";
// Lesson 9
// https://www.youtube.com/watch?v=AmpwfbdFYL8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=9
console.log('hey');
// quite complex
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
// quite complex
var greet3 = function (user) {
    console.log(user.name + " says hello for the first time");
};
// a repeat of the one above
var greetAgain = function (user) {
    console.log(user.name + " says hello again");
};
// now let's use the type alias:
var greetYetAgain = function (user) {
    console.log(user.name + " says hello");
};
