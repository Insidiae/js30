// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Wes";
let name2 = name;
console.log(name, name2);
name = "Wesley";
console.log(name, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

// You might think we can just do something like this:
let players2 = players;
console.log(players, players2);

// however what happens when we update that array?
players2[2] = "Scott";
console.log(players, players2);

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const players3 = players.slice();

// or create a new array and concat the old one in
const players4 = [].concat(players);

// or use the new ES6 Spread
const players5 = [...players];

// now when we update it, the original one isn't changed
players5[3] = "heee haww";
console.log(players, players5);

const players6 = Array.from(players);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;
// console.log(person, captain);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 100 });
console.log(person, captain2);

// We will hopefully soon see the object ...spread
//* THE FUTURE IS NOW
const captain3 = { ...person, number: 101 };
console.log(person, captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: "wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.log(wes);

const dev = Object.assign({}, wes);
// dev.social.twitter = "@syntaxfm";

console.log(wes, dev);

//* THE FUTURE IS NOW
const dev2 = structuredClone(wes);
dev2.social.twitter = "@syntaxfm";
console.log(wes, dev2);
