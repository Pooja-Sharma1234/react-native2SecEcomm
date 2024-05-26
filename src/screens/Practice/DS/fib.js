// const fib = function (n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   console.log(arr);
// };
// fib(5);
const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(5));
