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
  }
  return addition;
};
let sum = addnumbers(1, 2, 4, "3", 4);
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
