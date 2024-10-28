const person = {name: "jimin"}

console.log(Object.isSealed(person)); // false

Object.seal(person)

console.log(Object.isSealed(person)); // true

person.age = 24

console.log(person); // { name: 'jimin' }

delete person.name

person.name = "minjung"

console.log(person); // { name: 'jimin' }

Object.defineProperty(person, "name", { configurable: true }) // TypeError: Cannot redefine property: name 
