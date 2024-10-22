var person = {
  name: "lee"
}

var copy = person

console.log(copy === person) // 동일 객체 참조

person.name = "jimin"

copy.group = "Aespa"

console.log('person: ', person); // person:  { name: 'jimin', group: 'Aespa' }
console.log('copy: ', copy); // copy:  { name: 'jimin', group: 'Aespa' }
