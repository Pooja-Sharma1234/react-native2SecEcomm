//show the duplicates values only ----------find only Duplicate
// const arrN = [2, 3, 45, 5, 5, 5, 5, 6];
// const duplicates = arrN.filter((ele, index) => arrN.indexOf(ele) !== index);
// console.log(duplicates);
//****************or
// function duplicate(arr) {
//   return arr.filter((ele, index) => arrN.indexOf(ele) !== index);
// }
// const arrN = [2, 4, 5, 3, 5, 5, 5, 5, 6];
// console.log(duplicate(arrN));
//*********************************8 */
function findDuplicate(arr) {
  const duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && !duplicate.includes(arr[i])) {
        duplicate.push(arr[i]);
      }
    }
  }
  return duplicate;
}
const arrN = [2, 4, 5, 3, 5, 5, 5, 5, 6, 4, 6];
console.log(findDuplicate(arrN));
