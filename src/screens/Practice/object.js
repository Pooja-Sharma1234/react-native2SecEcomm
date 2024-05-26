// const obj = [
//   {
//     name: 'pooja',
//     class: 8,
//     age: 22,
//   },
//   {
//     name: 'choti',
//     class: 9,
//     age: 23,
//   },
//   {
//     name: 'badi',
//     class: 10,
//     age: 21,
//   },
// ];
// const name = obj.map(item => item.name.toUpperCase());
// const name1 = obj.filter(item => item.age > 21);
// const name2 = obj.find(item => item.age > 21);
// const name3 = obj.reduce((acc, curr) => acc + curr.age, 0);
// console.log(name3);

// const arr = [1, 5, 3, 2];
// function sum() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i] + sum;
//   }
//   return sum;
// }
// console.log(sum());

const arr = [
  2, 4, 1, 6, 7, 40, 12, 56000, 90, 23, 99999, 456, 233, 9887, 56000,
];
function func() {
  //   const max = arr.reduce((pre, curr) => (pre > curr ? pre : curr));
  //   return max;
  let Max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > Max) {
      Max = arr[i];
    }
  }
  return Max;
}
console.log(func());
