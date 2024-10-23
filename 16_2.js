const person = {
  name: "lee"
}

console.log(Object.getOwnPropertyDescriptor(person, "name")); // { value: 'lee', writable: true, enumerable: true, configurable: true }

person.name = "Jimin"
person.group = "Aespa"

console.log(Object.getOwnPropertyDescriptors(person));
// {
//   name: {
//     value: 'Jimin',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   group: {
//     value: 'Aespa',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }