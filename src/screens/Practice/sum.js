// const arr = [2, 3, 4, 5];
// const sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);
const arr = [3, 5, 2, 8, 7, 1, 9.2, 1, 4, 2];
function func() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(func());
