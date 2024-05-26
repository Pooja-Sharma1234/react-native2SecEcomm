// const arrNumber = [1, 9, 4, 3, 5, 9];
// const maxf = arr => {

//   return arr.reduce(function (pre, cur) {
//     return pre > cur ? pre : cur;
//   });
// };
// console.log(maxf(arrNumber));
// function MaxF(arr) {
//   const uniquearr = [];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniquearr.includes(arr[i])) {
//       uniquearr.push(arr[i]);
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return {uniquearr, max};
// }
// const arr = [1, 2, 3, 4];
// const {uniquearr, max} = MaxF(arr);
// console.log(uniquearr);
// console.log(max);
//*********************************** */
// function maxf(arr) {
//   const max = Math.max(...arr);
//   console.log(max);
// }
// const arr = [2, 4, 3, 1, 5];
// maxf(arr);
//******************************8 */
// const numbers = [10, 20, 30, 40, 50];
// const maxNumber = numbers.filter(num => num === Math.max(...numbers))[0];
// console.log('Max Number:', maxNumber);

//********************** */
// const numbers = [10, 20, 30, 40, 50];
// const maxNumber = Math.max(...numbers.map(Number));
// console.log('Max Number:', maxNumber);

//IIIII************************************??//
const arr = [2, 8, 6, 9];
const largestValue = arr => {
  const findLaregstValue = Math.max(...arr);
  index = arr.indexOf(findLaregstValue);
  arr.splice(index, 1);
  secLarValue = Math.max(...arr);
  return secLarValue;
};
console.log(largestValue(arr));

//so tj aur koi doubt hain kya state ko codh kr unhone tsx ka pucha ki tsx m kiya h kam
//kuch bol rahi hain kya ap  yhi ki typescript p kam kiya y pucha to
//bolna kiya hian ab apse puchnge javascript main aur typescript main kta anter hain
//toh boliyega typscript mai runtime main hi error mil jata but javascript main nahi mil jaysenaam se hi pata chlta typescript have assign type to
///varialels
//or unhone kha ki error aaye to kse debug krte ho
//ok bolyega hum trycatch use kr the error handling ke liye agr hun redux use kr rahen hain react native React Native Debugger yeah ek app hain ijse use kr sakte hian debugging keliye
//aur bhi bahut uapp hote hain jayse reactron samjhi tj aur bole ki fetch use krte ho to vha time limit set ki h jse ok use kiya
//btao settimeout nahi hota timeout hota hains yad eksec
//dekhiye
//javascript-js,jsx
//typescript -ts,tsx
//ok
//dekhiye
(async () => {
  const controller = new AbortController(); //yeah abortController global milta hain javascript ke sath
  // controller.abort() fir is abrot function ko calll kete hain
  const timeoutId = setTimeout(() => controller.abort(), 3000); //is line ka mtlb itne sec bad request ko abort kr diya jayega//yaha timer event set kiya

  try {
    const response = await fetch('https://www.google.com:81', {
      signal: controller.signal,
    }).then(res => res.json());
    console.log(response);
  } catch (error) {
    //error yaah recive kr lenge hun agr koi error ata hain toh
    console.error(error);
  } finally {
    clearTimeout(timeoutId); //aur yaha remove kiye isliye kiya kyu jo bhi event ko set krte usse clear kna jaruru hota hian nahi confilict ata hain
  }
})();
