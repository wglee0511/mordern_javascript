{
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
// {
//   '0': { value: 1, writable: true, enumerable: true, configurable: true },
//   '1': { value: 2, writable: true, enumerable: true, configurable: true },
//   '2': { value: 3, writable: true, enumerable: true, configurable: true },
//   length: { value: 3, writable: true, enumerable: false, configurable: false }
// }

const arr = [1]
arr.length = 3
console.log(arr); // [ 1, <2 empty items> ]

const arr1 = new Array(10)
console.log('arr1: ', arr1); // arr1:  [ <10 empty items> ]

const arr2 = new Array()
console.log('arr2: ', arr2); // arr2:  []

const arr3 = new Array(1, 2, 3)
console.log('arr3: ', arr3); // arr3:  [ 1, 2, 3 ]

const arr4 = Array.from({length: 2, "0": "a", "1": "b"})
console.log('arr4: ', arr4); // arr4:  [ 'a', 'b' ]

const arr5 = Array.from("Jimin")
console.log('arr5: ', arr5); // arr5:  [ 'J', 'i', 'm', 'i', 'n' ]

const arr6 = Array.from({length: 3})
console.log('arr6: ', arr6); // arr6:  [ undefined, undefined, undefined ]

const arr7 = Array.from({length: 3}, (_, index) => index * 2)
console.log('arr7: ', arr7); // arr7:  [ 0, 2, 4 ]

const arr8= []

arr8[0] = 1
arr8["1"] = 2
arr8["foo"] = 3
console.log('arr8: ', arr8); // arr8:  [ 1, 2, foo: 3 ]
console.log('arr8: ', arr8.length); // arr8:  2

const arr9 = [1, 2, 3]
delete arr9[1]
console.log('arr9: ', arr9); // arr9:  [ 1, <1 empty item>, 3 ]

const arr10 = [1, 2, 3]
arr10.slice(1, 1)
console.log('arr10: ', arr10); // arr10:  [ 1, 2, 3 ]

const arr11 = [1, 2, 3]
console.log('arr11', arr11.indexOf(3)); // arr11:  2
console.log('arr11: ', arr11.indexOf(4)); // arr11:  -1
console.log('arr11: ', arr11.indexOf(1, 1)); // arr11:  -1

const foods = ["짜장면", "짬뽕", "순대국"]

if(foods.indexOf("짬뽕") === -1) {
  foods.push("짬뽕")
}
console.log('foods: ', foods); // foods:  [ '짜장면', '짬뽕', '순대국' ]

if(!foods.includes("순대국")) {
  foods.push("순대국")
}
console.log('foods: ', foods); // foods:  [ '짜장면', '짬뽕', '순대국' ]

const arr12 = [1]
const result = arr12.push(2, 3)
console.log('arr12: ', arr12); // arr12:  [ 1, 2, 3 ]
console.log('result: ', result); // result:  3

arr12[arr12.length] = 4
console.log('arr12: ', arr12); // arr12:  [ 1, 2, 3, 4 ]

const newArr = [...arr12, 5]
console.log('arr12: ', arr12); // arr12:  [ 1, 2, 3, 4 ]
console.log('newArr: ', newArr); // newArr:  [ 1, 2, 3, 4, 5 ]


const arr13= [1, 2]
const result1 = arr13.pop()
console.log('result1: ', result1);


class Stack {
  array = []

  constructor(array) {
    this.array = array
  }

  push(value) {
    return this.array.push(value)
  }

  pop() {
    return this.array.pop()
  }

  entries() {
    return [...this.array]
  }
}

const stack = new Stack([1, 2])
console.log('stack: ', stack.entries()); // stack:  [ 1, 2 ]
stack.push(5)
console.log('stack: ', stack.entries()); // stack:  [ 1, 2, 5 ]
stack.pop()
console.log('stack: ', stack.entries()); // stack:  [ 1, 2 ]
}

