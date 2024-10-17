var group = Symbol("group")

console.log(group)  // Symbol(group)

var obj = {}

obj[group] = "Aespa"

console.log(obj) // { [Symbol(group)]: 'Aespa' }
console.log(obj[group])  // Aespa