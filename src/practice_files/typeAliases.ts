// Lesson 9
// https://www.youtube.com/watch?v=AmpwfbdFYL8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=9
console.log('hey');

// quite complex
const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}
// quite complex
const greet3 = (user: {name: string, uid: string | number}) => {
  console.log(`${user.name} says hello for the first time`);
}
// a repeat of the one above
const greetAgain = (user: {name: string, uid: string | number}) => {
  console.log(`${user.name} says hello again`);
}

// time for a type alias
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};
// now let's use the type alias:
const greetYetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}
