const newSymbol = Symbol()

console.log('newSymbol: ', newSymbol);
// newSymbol:  Symbol()

const symbol1 = Symbol("jimin")
const symbol2 = Symbol("jimin")


// console.log(symbol1 === symbol2);
// his comparison appears to be unintentional 
// because the types 'typeof symbol1' and 'typeof symbol2' 
// have no overlap.

console.log(symbol1.description);
console.log(symbol1.toString());
// jimin
// Symbol(jimin)

// console.log(symbol1 + "");
// The '+' operator cannot be applied to type 'symbol'.
// console.log(symbol1 + 1);
// Operator '+' cannot be applied to types 'unique symbol' and 'number'
// console.log(!!symbol1);
// true

const symbol3 = Symbol.for("jimin")
const symbol4 = Symbol.for("jimin")
// console.log('symbol3: ', symbol3 === symbol4);
// true

const s3 = Symbol.keyFor(symbol3)
// Symbol(jimin)

const s1 = Symbol.keyFor(symbol1)
console.log('s1: ', s1);
/// undefined


// const DIRECTION = {
//   UP: 0,
//   RIGHT: 1,
//   DOWN: 2,
//   LEFT: 3
// };

// const characterDirection = DIRECTION.UP

// if(characterDirection === DIRECTION.UP) {
//   console.log("go up");
// }

// DIRECTION 불변 객체이며 프로퍼티 값은 유일무이한 값
const DIRECTION = Object.freeze({
  UP: Symbol("up"),
  RIGHT: Symbol("right"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
});

const characterDirection = DIRECTION.UP

if(characterDirection === DIRECTION.UP) {
  console.log("go up");
}

const testObject = {
  [Symbol.for("up")] : "up"
}

console.log(testObject[Symbol.for("up")]);
// up

const keys = Object.keys(testObject)
console.log('keys: ', keys); // []
const own = Object.getOwnPropertyNames(testObject)
console.log('own: ', own); // []
const symbols = Object.getOwnPropertySymbols(testObject)
console.log('symbols: ', symbols); // [ Symbol(up) ]

// Array.prototype.sum = function () : number {
//   return this.reduce((acc, cur) => acc + cur, 0)
// }
// console.log([1, 2].sum()); // 3

// Array.prototype.[Symbol.for("sum")] = function () : number {
//   return this.reduce((acc, cur) => acc + cur, 0)
// }

// console.log([1, 2][Symbol.for("sum")]); // 3

const iterable = {
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5
    return {
      next() {
        return { value: cur++, done: cur > max + 1 }
      }
    }
  }
}

for (const num of iterable) {
  console.log('num: ', num);
}
// num:  1
// num:  2
// num:  3
// num:  4
// num:  5