const person = {name: "jimin"}

console.log(Object.isExtensible(person)); // true

Object.preventExtensions(person)

console.log(Object.isExtensible(person)); // false

person.age = 24

console.log(person); // { name: 'jimin' }

delete person.name

console.log(person); // {}

Object.defineProperty(person, "age", {value: 20}) // TypeError: Cannot define property age, object is not extensible