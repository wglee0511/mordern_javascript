var x = 5;
var result = 0;

result = x++
console.log('result, x: ', result, x); // result, x:  5 6

result = ++x
console.log('result, x: ', result, x); // result, x:  7 7

result = x--
console.log('result, x: ', result, x); // result, x:  7 6

result = --x
console.log('result, x: ', result, x); // result, x:  5 5


var y = 1;

console.log('y: ', +y); // y:  1
console.log('y: ', y); // y:  1 (y값 자체는 동일)

y = true
console.log('y: ', +y); // y:  1
console.log('y: ', y); // y:  true (y값 자체는 동일)

y = false
console.log('y: ', +y); // y:  0
console.log('y: ', y); // y:  false (y값 자체는 동일)

y = "hello"
console.log('y: ', +y); // y:  NaN
console.log('y: ', y); // y:  hello (y값 자체는 동일)



console.log("1" + 2); // 12
console.log(1 + true); // 2
console.log(1 + false); // 1
console.log(1 + null); // 1
console.log(1 + undefined); // NaN

