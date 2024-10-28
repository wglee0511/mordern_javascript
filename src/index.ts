// function Person(name: string) {
//   this.name = name
//   this.sayHello = function () {
//     console.log("hi" + " " + this.name)
//   }
// }
// // 일반 함수의 내부 this는 전역 객체 window를 가리킨다.
// const jimin = new Person("jimin")
// console.log('jimin: ', jimin);
console.log(this);

export {}