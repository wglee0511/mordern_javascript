const test1 = "010-1234-1234"
const test2 = "010-123p-1234"

const phoneReg = /^\d{3}-\d{4}-\d{4}$/

const doTest1 = phoneReg.test(test1)
console.log('doTest1: ', doTest1); // true
const doTest2 = phoneReg.test(test2)
console.log('doTest2: ', doTest2); // false

const target = 'is There?'

// 패턴 is
// 플래그 i => 대소문자를 구분하지 않고 검색

const stringTarget = "Is this all there is?"
const isReg = /is/i

const isThereTest =  isReg.exec(target)
const stringTargetTest = stringTarget.match(isReg)
console.log('stringTargetTest: ', stringTargetTest);
// [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]


const stringTargetValue = "Is this all there is?"
let consoleValue: any = ""
consoleValue =  stringTargetValue.match(/is/)
// 대소문자를 구분하여 한번만 검색
// [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
consoleValue =  stringTargetValue.match(/is/i)
// 대소문자를 구분하지 않고 한번만 검색
// [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]
consoleValue =  stringTargetValue.match(/is/g)
// 대소문자를 구분하고 전역 검색
// [ 'is', 'is' ]
consoleValue =  stringTargetValue.match(/is/ig)
// 대소문자를 구분하지 않고 전역 검색
// [ 'Is', 'is', 'is' ]

const testRegThreeDot = /.../g

console.log(stringTargetValue.match(testRegThreeDot));
// [
//   'Is ', 'thi',
//   's a', 'll ',
//   'the', 're ',
//   'is?'
// ]

const stringMNStringTest = "A AA B BB Aa Ba AAA"
const mNStringReg = /[AB]+/g
const rangeStringReg = /[A-Za-z]+/g

console.log(stringMNStringTest.match(rangeStringReg))
// [
//   'A',   'AA',
//   'B',   'BB',
//   'Aa',  'Ba',
//   'AAA'
// ]

const questionMarkStringTest = "color colour"
const questionMarkReg = /colou?r/g

console.log(questionMarkStringTest.match(questionMarkReg));
// [ 'color', 'colour' ]

const stringSearchTest = "AA aa 12,345 _%@#!"
const rangeNumberReg = /[\w,]+/g
const rangeReverseDReg = /[\W,]+/g
console.log(stringSearchTest.match(rangeNumberReg));
// [ 'AA', 'aa', '12,345', '_' ]
console.log(stringSearchTest.match(rangeReverseDReg));
// [ ' ', ' ', ',', ' ', '%@#!' ]

const startStringText = "https://google.com"
const startHttpsReg = /^https?:\/\//
const startHttpsSecondReg = /^(http|https):\/\//
console.log(startHttpsReg.test(startStringText)); // true
console.log(startHttpsSecondReg.test(startStringText)); // true

const fileName = "index.html"
const fileReg = /html$/

console.log(fileReg.test(fileName)); // true

const onlyNumberString = "1234512313"
const onlyNumberReg = /\d+$/

console.log(onlyNumberReg.test(onlyNumberString)); // true

const id_1 = "aespa_karina_04_11"
const id_2 = "karina0411"
const idReg = /^[A-Za-z0-9]{4,10}$/
console.log(idReg.test(id_1)); // false
console.log(idReg.test(id_2)); // true

const emailString = "abcd@gmail.com"
const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

console.log(emailReg.test(emailString)); // true

const cellPhone = "010-1234-1234"
const cellPhoneReg = /^\d{3}-\d{4}-\d{4}$/

console.log(cellPhoneReg.test(cellPhone)); // true