function add (number) { 
  console.log(arguments); // [Arguments] { '0': 5 }
  console.log('arguments: ', arguments.length); // arguments:  1
  return ++number
}

console.log(add()); // NaN
console.log(add(2, 3)); // 3
console.log(add(5)); // 6
// console.log(Object.getOwnPropertyDescriptors(add));

// {
//   length: { value: 1, writable: false, enumerable: false, configurable: true },
//   name: {
//     value: 'add',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   },
//   arguments: {
//     value: null,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   caller: {
//     value: null,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   prototype: { value: {}, writable: true, enumerable: false, configurable: false }
// }

