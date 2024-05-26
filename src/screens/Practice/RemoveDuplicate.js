// function removeDuplicate(arr) {
//   const uniquearr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniquearr.indexOf(arr[i]) === -1) {
//       uniquearr.push(arr[i]);
//     }
//   }
//   return uniquearr;
// }
// const arN = [2, 3, 4, 3, 6, 2, 5, 6];
// console.log(removeDuplicate(arN));

//...............................//
// function removeD(arr) {
//   const uniquearr = [...new Set(arrN)];
//   console.log(uniquearr);
// }
// const arrN = [2, 3, 3, 4, 4];
// removeD(arrN);
//88888888888///
// function removeDuplicates(arr) {
//   return arr.filter((ele, index) => arr.indexOf(ele) === index);
// }

// const arrN = [2, 3, 45, 5, 5, 5, 5, 6];
// const uniqueArray = removeDuplicates(arrN);
// console.log(uniqueArray);
// let user = {
//   username: 'hello',
//   rc1: () => {
//     console.log('hi' + this.username);
//   },
//   rc2() {
//     console.log('hiii' + this.username);
//   },
// };
// user.rc1();
// user.rc2();

// var name = 'pooja';
// function fn() {
//   var name = 'shalu';
// }
// console.log(name);  ///lexical scope-access global variable inside the function but not outside from inside of a function
// fn();
//closure
// var un = 'hi';

// function fn1() {
//   var name = 'pj';
//   function fn2(num) {
//     console.log(name, num, un);
//   }
//   return fn2;
// }
// fn1()(5);
// var e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }
// console.log(sum(1)(2)(3)(4));
// function fn(num) {
//   return function (innersum) {
//     console.log(num);
//   };
// }
// var add = fn(6);
// add(10);
// add(12);

//yaha a  main kya data ayaga ager console karenge toh
function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    //yeah line kya keh raha hain batiye loop h jo itne time tk chl rha h
    a[i] = i * i; //ok aur yeah jo i ki value hogi mtlb index value usko mul krke arr m dala h shi kya?
    ///a[i] sqaure nikl ke a ke index main assign kr de raha hain ok jaya tha kyaa yah tk aya
    //jo i ki value hui jse ki 1 to vha jo arr ki value h usko mul kiya?
    //nahi jayse index 2 aya to line 81 main 1x1=1 fir usko
    //a=[0,1,4,9] ayse store ho ajyega ayse banega 2 kse ab agete hain
  }
  return function (index) {
    //yeah ek function return kr raha hain jo ek anonymous hain
    console.log(a[index]); //yaha kya hota jab hum koi index pass karenge to a main se use index ki value nikl ke dee ita aya
    //boliye ok isi ko closure bolte hian hum abhi bhi a ko acess kr pa rahen hain ha
  };
}
const closure = find(); // yaha pr kya ho raha dfind() ek function return karega jo closure variable recive karega
//itna closure valriable ko mil jayega ita samjh aya tj find se kya hoga
console.time('6');
closure(6);
console.timeEnd('6');
console.time('50');
closure(50);
console.timeEnd('50'); //yeah sab to faltu hian time batane ke liye batayaga ki kitna time liye
//beSt casE worST CASE bAtaNe Ke LiyE hAIN OK
 //n OK
//bas yahi ayega a ke 6index pr 36 hain 
//50 pr2500 sahi toh hain na 
//yeah count kaha se a taha hin
//y
//good tj nice tarika hain
//kaha se nikalin thik h na ek jgh pr h sb ok
//acha ni kya acha hain tabhi bola good ab kro
//BahUt meHNaT kKIYa Ap Ne tOh kese kiya v y key n preshan kr diya koi ni ab hogya na ab aap mt preshan kro
//pta h has rhe honge are nahi meri intin himat ha pta h aapki himat ka

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i);
//     }, 1000);
//   }
//   inner(i);
// }

//private counter using closure
// function counter() {
//   var _count = 0;
//   function add(inc) {
//     _count += inc;
//   }
//   function retriev() {
//     console.log('count' + _count);
//   }
//   return {add, retriev};
// }
// const c = counter();
// c.add(5);
// c.retriev();
