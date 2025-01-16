console.log(...[1, 2, 3]); // 1 2 3
console.log(..."jimin"); // j i m i n
console.log(...new Map([[1, 2]])); // [ 1, 2 ]
console.log(...new Set([3, 4])); // 3 4
// console.log(...{a: 1, b: 2});
//  Type '{ a: number; b: number; }' must have a '[Symbol.iterator]()' method that returns an iterator.

const arr = [1, 2, 3]
console.log(Math.max.apply(null, arr)); // 3
console.log(...arr); // 3

const anyFunction = (...rest: number[]) => {
  console.log('rest: ', rest);
}
anyFunction(1, 2, 3)
// rest:  [ 1, 2, 3 ]
anyFunction(...[3, 4, 5])
/// rest:  [ 3, 4, 5 ]

const arr1 = [1, 2].concat([3, 4])
const arr2 = [...[1, 2], ...[3, 4]]
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
// arr1:  [ 1, 2, 3, 4 ]
// arr2:  [ 1, 2, 3, 4 ]

const arr3 = [1, 4]
const arr4 = [2, 3]

arr3.splice(1, 0, ...arr4)
console.log('arr3: ', arr3);

const originArr = [1, 2]
console.log('originArr: ', originArr);
// originArr:  [ 1, 2 ]
const copyArr = originArr.slice()
console.log('copyArr: ', copyArr);
// copyArr:  [ 1, 2 ]

const originArr1 = [1, 2]
console.log('originArr1: ', originArr);
// originArr1:  [ 1, 2 ]
const copyArr1 = [...originArr1]
console.log('copyArr1: ', copyArr);
// copyArr1:  [ 1, 2 ]

const merged = Object.assign({}, {a: 1, b: 2}, {c: 10, d: 11})
console.log('merged: ', merged);
// merged:  { a: 1, b: 2, c: 10, d: 11 }