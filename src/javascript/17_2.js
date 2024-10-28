function Person(name) {
  this.name = name
  this.sayHello = function () {
    console.log("hi" + " " + this.name)
  }
}

const jimin = new Person("jimin")
const minjung = new Person("minjung")

jimin.sayHello() // hi jimin
minjung.sayHello() // hi minjung