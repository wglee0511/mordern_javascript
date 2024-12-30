const counterTest = {
	num: 1,
  increase: () => ++this.num,
  decrease() {
    return --this.num
  },
  add: function() {
    return ++this.num
  }
}

console.log(counterTest.increase()) // NaN
console.log(counterTest.decrease()) // 0
console.log(counterTest.add()) // 1

const testCase = function() {
  console.log(this)
}

testCase()

const restTestCase = (...rest) => console.log(rest)

restTestCase(1, 2, 3, 4, 5)