// let factnum=-1;
// function fun1(){
//     let result=1
//     if(factnum<=0)
//     {
//         console.log("not posssible")
//     }
//     else
//     {
//         for(let i=1;i<=factnum;i++)
//         {
//             result=result*i
//         }
//         console.log(result)
//     }
//     return result

// }

// fun1()

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   if (num == 2) {
//     return true;
//   }
//   for (let i = 3; i < num; i++) {
//     if (num % i == 0) {
//       //5/
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(11));
// console.log(isPrime(2));

// const vowel = ['a', 'e', 'i', 'o', 'u'];
// const isVowel = str => {
//   let count = 0;
//   const Lowercase = str.toLowerCase();
//   for (let i = 0; i < Lowercase.length; i++) {
//     if (vowel.includes(Lowercase[i])) {
//       count++;
//     }
//   }
//   return count;
// };
// const string = 'hello pooja';
// console.log(isVowel(string));

// const revfun = str => {
//   var strvar = str.split('');
//   var revvar = strvar.reverse();
//   return revvar;
// };
// console.log(revfun('hello'));

// const ascfun = arr => {
//   for (let i = 0; i < Num.length; i++) {
//     for (let j = 0; j < Num.length - 1; j++) {
//       if (Num[i] < Num[j]) {
//         let temp = Num[i];
//         Num[i] = Num[j];
//         Num[j] = temp;
//       }
//     }
//   }
//   return Num;
// };

// const Num = [3, 2, 5, 8, 1];
// console.log(ascfun(Num));
// const arr = [8, 3, 4, 1];
// const asca = arr.sort((a, b) => a - b);
// console.log(asca);
// const arr = [2, 4, 6, 7];
// const sq = arr.map(item => item * item);
// const sort = sq.sort((a, b) => a - b);

// console.log(sort);

// function squqref(arr) {
//   const sq = arr.map(item => item * item);
//   const sort = sq.sort((a, b) => a - b);
//   return sort;
// }

// function square(arr) {
//   const mul = [];
//   for (let i = 0; i < arr.length; i++) {
//     const muli = arr[i] * arr[i];
//     mul.push(muli);
//   }
//   //bubble sort
//   for (let i = 0; i < mul.length; i++) {
//     for (let j = 0; j < mul.length - 1; j++) {
//       if (mul[j] > mul[j + 1]) {
//         let temp = mul[j];
//         mul[j] = mul[j + 1];
//         mul[j + 1] = temp;
//       }
//     }
//   }
//   return mul;
// }
// const arr = [4, 8, 2, 1];
// console.log(square(arr));

// function findSum(arr, targetSum) {
//   let pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == targetSum) {
//         pairs.push(arr[i], arr[j]);
//       }
//     }
//   }
//   return pairs;
// }
// const arr = [4, 7, 8, 9, 2, 1];
// const targetSum = 16;
// console.log(findSum(arr, targetSum));
