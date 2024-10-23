const person = {}

Object.defineProperty(person, "firstName", {
  value: "Jimin",
  writable: true,
  enumerable: true,
  configurable: true,
})

Object.defineProperty(person, "lastName", {
  value: "Yoo"
})

let descriptor = Object.getOwnPropertyDescriptors(person)

console.log('descriptor: ', descriptor);

// descriptor:  {
//   firstName: {
//     value: 'Jimin',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   lastName: {
//     value: 'Yoo',
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }


// lastName 프로퍼티는 enumerable false 이므로 열거 불가
console.log(Object.keys(person)); // [ 'firstName' ]


// lastName 프로퍼티는 writable false 이므로 무시
person.lastName = "Kim"

// lastName 프로퍼티는 configurable false 이므로 무시
delete person.lastName

descriptor = Object.getOwnPropertyDescriptors(person)
console.log('descriptor: ', descriptor);

// descriptor:  {
//   firstName: {
//     value: 'Jimin',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   lastName: {
//     value: 'Yoo',
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }

Object.defineProperty(person, "fullName", {
  get() {
    return this.firstName + " " + this.lastName
  },

  set(name) {
    [this.firstName, this.lastName] = name.split(" ")
  },

  enumerable: true,
  configurable: true
})

descriptor = Object.getOwnPropertyDescriptors(person)
console.log('descriptor: ', descriptor);

// descriptor:  {
//   firstName: {
//     value: 'Jimin',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   lastName: {
//     value: 'Yoo',
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   fullName: {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: true,
//     configurable: true
//   }
// }