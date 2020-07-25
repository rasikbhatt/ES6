// let, const
//these keywords are used to declare variables in ES6

let name = "applesauce"; //here the name is variable whose value we can change

const birthyear = 1992;
console.log(name, birthyear);
// Arrow function

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

//Default parameter
const divide = (a, b = 1) => {
  return a / b;
};
console.log(divide(0));

// spread and rest

//destructuring an Array
const sports = ["cricket", "football", "hockey", "badminton"];
console.log(...sports);
const sport1 = sports[2];
console.log(sport1);

const addnumbers = (...numbers) => {
  let addition = 0;
  for (i in numbers) {
    console.log(typeof numbers[i]);
    if (typeof numbers[i] === typeof addition) addition += numbers[i];
    else continue;
  }
  return addition;
};
let sum = addnumbers(1, 2, 4, "3", 2);
console.log(sum);

//Destructuring objects

const movies = {
  name: "Wolf of Wall Street",
  actor: "Leonardo",
  rating: 4,
};

const { name: moviename, actor: moviecast, rating: movierating } = movies;
console.log(`Movie Name: ${moviename}`); //string concatenation in ES6(Template Literal)
console.log(`Movie Cast: ${moviecast}`);
console.log(`Movie Rating: ${movierating}`);

const another = { ...movies };
//Slice and splice

// Slice
const fruits = ["apple ", "mango", "kiwi", "banana"];
console.log(fruits.slice(2));

//Splice
fruits.splice(2, 0, "grapes", "pineapple");
console.log(fruits);

//Array helper methods
// find()  foreach() map() filter() reduce()

//find(): returns the value of the first array element that passes the test function

const students = [
  { name: "Rasik", id: 121 },
  { name: "aamir", id: 321 },
  { name: "Raquib", id: 333 },
];
let student = students.find((student) => student.name === "Rasik");
console.log(student);

// foreach(): accept a function iterator that loop through each item in an array

students.forEach((student) => console.log(student));
fruits.forEach((fruit) => console.log(fruit));

//map(): returns the value of element in an array of objects

student = students.map((student) => student.name);
console.log(student);

const person = { name: "allie", street: "23 NY", age: 12 };
const showdata = () => {
  for (i in person) console.log(`key is ${i} value is ${person[i]}`);
};

showdata();
