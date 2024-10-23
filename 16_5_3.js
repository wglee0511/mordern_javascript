const person = {
  name: "jimin",
  address: {
    city: "Seoul"
  }
}

Object.freeze(person)

console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); // false