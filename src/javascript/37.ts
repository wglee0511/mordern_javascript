const set1 = new Set([1, 2, 3, 3, 4])
const set2 = new Set("hello")

console.log('set1: ', set1);
// set1:  Set(4) { 1, 2, 3, 4 }
console.log('set2: ', set2);
// set2:  Set(4) { 'h', 'e', 'l', 'o' }

const testArr1 = [1, 2, 3, 3, 4]
const filterValue =  testArr1.filter((value, index, self) => self.indexOf(value) === index)
console.log('filterValue: ', filterValue);
// filterValue:  [ 1, 2, 3, 4 ]
const setFilterValue = [...new Set(testArr1)]
console.log('setFilterValue: ', setFilterValue);
// setFilterValue:  [ 1, 2, 3, 4 ]

const sizeSetTest = new Set([1, 2, 3, 3, 4])
console.log('sizeSetTest: ', sizeSetTest.size);
// sizeSetTest:  4

const emptySetObj = new Set([])
emptySetObj.add({a: 1}).add({a: 1})
console.log('emptySetObj: ', emptySetObj);
// emptySetObj:  Set(2) { 1, 2 }

const deleteSetTest = new Set([1, 2, 3, 3, 4])
deleteSetTest.delete(3)
console.log('deleteSetTest: ', deleteSetTest);
// deleteSetTest:  Set(3) { 1, 2, 4 }

const intersectionSetA = new Set([1, 2, 3, 4])
const intersectionSetB = new Set([2, 4])
console.log(intersectionSetA.intersection(intersectionSetB));
// Set(2) { 2, 4 }

const isSupersetOfSetA = new Set([1, 2, 3, 4])
const isSupersetOfSetB = new Set([2, 4])
console.log(isSupersetOfSetA.isSubsetOf(isSupersetOfSetB))
// false
console.log(isSupersetOfSetB.isSubsetOf(isSupersetOfSetA))
// true

const mapTest1 = new Map([["key1", "value1"], ["key2", "value2"], ["key1", "value3"]])
console.log('mapTest1: ', mapTest1);
// mapTest1:  Map(2) { 'key1' => 'value3', 'key2' => 'value2' }

// const mapTest2 = new Map([1, 2])
// '(iterable?: Iterable<readonly [unknown, unknown]>): Map<unknown, unknown>', gave the following error.

const mapSetTest = new Map([["key1", "value1"], ["key2", "value2"]])
mapSetTest.set("key3", "value3")
console.log('mapSetTest: ', mapSetTest);
// mapSetTest:  Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
mapSetTest.set("key4", "value4").set("key5", "value5")
console.log('mapSetTest: ', mapSetTest);
// mapSetTest:  Map(5) {
//   'key1' => 'value1',
//   'key2' => 'value2',
//   'key3' => 'value3',
//   'key4' => 'value4',
//   'key5' => 'value5'
// }

// const emptyMap1 = new Map()

// emptyMap1.set(jimin, "suwon").set(minjung, "busan")
// console.log('emptyMap1: ', emptyMap1);
// // emptyMap1:  Map(2) { { name: 'jmin' } => 'suwon', { name: 'minjung' } => 'busan' }

// console.log(emptyMap1.get(jimin))
// // suwon
// console.log(emptyMap1.has(minjung))
// // true
// console.log(emptyMap1.has("key1"))
// // false


const jimin = {name: "jmin"}
const minjung = {name: "minjung"}

const iteratorMapTest = new Map([[jimin, "suwon"], [minjung, "busan"]])

for (const key of iteratorMapTest.keys()) {
  console.log(key)
}
// { name: 'jmin' }
// { name: 'minjung' }

for (const value of iteratorMapTest.values()) {
  console.log(value)
}
// suwon
// busan

for (const [key, value] of iteratorMapTest.entries()) {
  console.log(key, value)
}
// { name: 'jmin' } suwon
// { name: 'minjung' } busan

