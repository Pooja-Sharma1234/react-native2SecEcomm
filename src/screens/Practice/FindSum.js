// const arr = [1, 2, 3];
// const FindSum = arr.reduce((acc, currVal) => acc + currVal, 0);

// console.log(FindSum);
const arr = [1, 2, 3];
let sum = 0;
const findSum = arr => {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(findSum(arr));
