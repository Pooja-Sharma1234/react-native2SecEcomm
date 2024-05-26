let myArray = [
  {
    name: 'Jason',
    last: 'Doe',
    age: 39,
    gender: 'M',
    salary: 70000,
    married: true,
  },
  {
    name: 'Tom',
    last: 'Smith',
    age: 42,
    gender: 'F',
    salary: 80000,
    married: true,
  },
  {
    name: 'Amy',
    last: 'Burnquist',
    age: 29,
    gender: 'F',
    salary: 60000,
    married: false,
  },
];
// console.log(myArray[0].name);
// const value = myArray.filter(item => item.age > 39);
// var x = 10;
// let name = 'Tammy';
// const found = false;

// // => Tammy, false, null
// let single = 'Wheres my bandit hat?';
// let double = 'Wheres my bandit hat?';

// // => 21
// const numberOfColumns = 4;

// TypeError: Assignment to constant...
// numberOfColumns = 8;
// console.log(numberOfColumns);
// Named function
// function rocketToMars() {
//   return 'BOOM!';
// }

// Anonymous function
// Variable declared globally
// const color = 'blue';

// function printColor() {
//   console.log(color);
// }

// printColor(); // => blue

// Prints 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
  setTimeout(_ => console.log(i), 10);
  console.log(i);
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Adding a single element:
// const cart = ['apple', 'orange'];
// cart.push('pear');
// console.log(cart);

// // Adding multiple elements:
// const numbers = [1, 2];
// numbers.push(3, 4, 5);
// console.log(numbers);
// let cats = ['Bob', 'Willy', 'Mini'];

// cats.shift(); // ['Willy', 'Mini']
// cats.unshift('Puff', 'George');
// console.log(cats);
// const numbers = [3, 2, 1];
// const newFirstNumber = 4;
// const arr = [newFirstNumber].concat(numbers);
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));

// // => [ 3, 2, 1, 4 ]
// const arr1 = numbers.concat(newFirstNumber);
// console.log(arr.sort((a, b) => a - b));

// Uncaught ReferenceError...

// Code here can't use pizzaName

// => undefined

// console.log(myArray);
// console.log(myArray.fetch(item => item.age > 29));
