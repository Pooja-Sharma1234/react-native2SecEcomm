const obj = [
  {
    name: 'priya',
    age: 20,
  },
  {
    name: 'muskan',
    age: 21,
  },
  {
    name: 'apj',
    age: 22,
  },
  {
    name: 'apj1',
    age: 22,
  },
];
const filterfun = obj.find(item => item.age > 21);
console.log(filterfun);
