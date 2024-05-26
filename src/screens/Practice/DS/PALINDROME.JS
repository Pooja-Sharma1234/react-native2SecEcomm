// const isPalindrome = function (x) {
//   return x < 0 ? false : x === +x.toString().split('').reverse().join('');
// };

// console.log(isPalindrome(0));
function fun1(arr) {
  return arr.reduce((pre, currval) => {
    if (Array.isArray(currval)) {
      return (pre = pre.concat(fun1(currval)));
    } else {
      pre.push(currval);
    }
    return;
  }, []);
}
console.log(fun1([1, 2, 3, [7, 8, 9], [1, 2, 3]]));
