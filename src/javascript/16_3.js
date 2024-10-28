const person = {
  	// 데이터 프로퍼티
	firstName: "Jimin",
  lastName: "Yoo",
  
  	// 접근자 프로퍼티
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },

	set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ") 
  }
}

console.log(person.firstName + " " + person.lastName); // Jimin Yoo
console.log(person.fullName); // Jimin Yoo

person.fullName = "Minjung Kim"
console.log('person: ', person); // person:  { firstName: 'Minjung', lastName: 'Kim', fullName: [Getter/Setter] }
console.log(person.fullName); // Minjung Kim


const descriptor = Object.getOwnPropertyDescriptors(person)
console.log('descriptor: ', descriptor);
// descriptor:  {
//   firstName: {
//     value: 'Minjung',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   lastName: {
//     value: 'Kim',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   fullName: {
//     get: [Function: get fullName],
//     set: [Function: set fullName],
//     enumerable: true,
//     configurable: true
//   }
// }