function Person(name) {
  this.name = name
  this.sayHello = function () {
    console.log("hi" + " " + this.name)
  }
}

const jimin = Person("jimin")
console.log(name) // jimin
sayHello() // hi jimin