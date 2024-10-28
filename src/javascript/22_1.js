// 글로벌 this
console.log("1: ", this) // 브라우저에서 1: window // node에서 1: {}


// 리터럴 객체 this
const person = {
  name: "jimin",
  getThis() {
    console.log("2: ", this); // 2:  { name: 'jimin', getThis: [Function: getThis] }
  }
}

person.getThis() 

// 일반 함수 this
function getThis () {
  console.log("3: ", this);
// window 에서
// 3: window
// node 에서
//   3:  <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Getter/Setter],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [AsyncFunction: fetch],
//   crypto: [Getter]
// }
}

getThis()
// 생성자 함수 this

function Person (name) {
    this.name = name
    console.log("4: ", this); // 4:  Person { name: 'jimin' }
}

const jimin = new Person("jimin")

const foo = function () { console.dir(this) }

foo()
// <ref *1> Object [global] {
  // global: [Circular *1],
  // queueMicrotask: [Function: queueMicrotask],
  // clearImmediate: [Function: clearImmediate],
  // setImmediate: [Function: setImmediate] {
  //  [Symbol(nodejs.util.promisify.custom)]: [Getter]
  // },
  // structuredClone: [Getter/Setter],
  // clearInterval: [Function: clearInterval],
  // clearTimeout: [Function: clearTimeout],
  // setInterval: [Function: setInterval],
  // setTimeout: [Function: setTimeout] {
    // // [Symbol(nodejs.util.promisify.custom)]: [Getter]
  // },
  // atob: [Getter/Setter],
  // btoa: [Getter/Setter],
  // performance: [Getter/Setter],
  // fetch: [AsyncFunction: fetch],
  // crypto: [Getter]
//}

const obj = { foo }

obj.foo() // { foo: [Function: foo] }

new foo() // foo {}

const bar = { name :"jimin"}

foo.call(bar) // { name: 'jimin' }
foo.apply(bar) // { name: 'jimin' }
foo.bind(bar)() // { name: 'jimin' }
