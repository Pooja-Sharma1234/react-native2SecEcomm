const arrNum = [1, 2, 3, 6, 7, 8, 9];
const oddNumArr = [];
const evenarr = [];
const oddNum = () => {
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
      evenarr.push(arrNum[i]);
    } else {
      oddNumArr.push(arrNum[i]);
    }
  }
  return {oddNumArr, evenarr};
};
console.log(oddNum(arrNum));
// const MissingNum = arr => {
//   const minValue = Math.min(...arr);
//   const maxValue = Math.max(...arr);
//   for (let i = minValue; i < maxValue; i++) {
//     if (arr.indexOf(i) < 0) {
//       missarr.push(i);
//     }
//   }
//   return missarr;
// };
// console.log(MissingNum(arrNum));
