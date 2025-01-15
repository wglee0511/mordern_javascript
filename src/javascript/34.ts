
const isIterable = (value: any) => value !== null && typeof value[Symbol.iterator] === "function";

console.log('isIterable([]): ', isIterable([]));// true
console.log('isIterable("hi"): ', isIterable("hi"));// true
console.log('isIterable(new Map()): ', isIterable(new Map()));// true
console.log('isIterable(new Set()): ', isIterable(new Set()));// true
console.log('isIterable({}): ', isIterable({}));// false


const testArray = [1, 2, 3]
console.log(Symbol.iterator in testArray); // true

const testObj = {a: 1, b: 2}
console.log(Symbol.iterator in testObj);  // false

// for (const item of testObj) {
//   error TS2488: Type '{ a: number; b: number; }' must have a '[Symbol.iterator]()' method that returns an iterator.
//   console.log(item);
// }

// const [a, b] = testObj
// error TS2488: Type '{ a: number; b: number; }' must have a '[Symbol.iterator]()' method that returns an iterator.

const testArray1 = [1, 2, 3]
const iterator = testArray1[Symbol.iterator]()
console.log("hasNext", "next" in iterator);
console.log('iterator: ', iterator.next());
console.log('iterator: ', iterator.next());
console.log('iterator: ', iterator.next());
console.log('iterator: ', iterator.next());

// iterator:  { value: 1, done: false }
// iterator:  { value: 2, done: false }
// iterator:  { value: 3, done: false }
// iterator:  { value: undefined, done: true }

const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
}

for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}
// 1
// 2
// 3

const convertToIterable = Array.from(arrayLike)
console.log('convertToIterable: ', convertToIterable);
// convertToIterable:  [ 1, 2, 3 ]

// const fibonacci = {
//   [Symbol.iterator]() {
//     let [pre, cur] = [0, 1]
//     const max = 10// 최대 값 설정

//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur]
//         return {value: cur, done: cur >= max}
//       }
//     }
//   }
// }
// for (const item of fibonacci){
//   console.log('item: ', item); // 1, 2, 3, 5, 8
// }

// const fibonacciArr = [...fibonacci]
// console.log('fibonacciArr: ', fibonacciArr); // [ 1, 2, 3, 5, 8 ]
// const [first, second, ...rest] = fibonacciArr
// console.log('first: ', first); // 1
// console.log('second: ', second); // 2
// console.log('rest: ', rest); // [3, 5, 8]

const fibonacci = (max: number) => {
  let [pre, cur] = [0, 1]
  return {
    [Symbol.iterator]() {
    return {
      next() {
        [pre, cur] = [cur, pre + cur]
        return {value: cur, done: cur >= max}
        }
      }
    }
  }
}

// fibonacci 함수는 이터러블을 반환한다.
const iterableFibonacci = fibonacci(50)
// 이터러블의 Symbol.iterator 메서드는 이터레이터를 반환한다.
const iteratorFibonacci = iterableFibonacci[Symbol.iterator]()

console.log(iteratorFibonacci.next());
// { value: 1, done: false }
console.log(iteratorFibonacci.next());
// { value: 2, done: false }



for (const item of fibonacci(50)) {
  console.log('item: ', item);
}

// item:  1
// item:  2
// item:  3
// item:  5
// item:  8
// item:  13
// item:  21
// item:  34