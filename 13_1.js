var x = "global"

const foo = () =>{
  var x = "local"
  console.log('x: ', x); // x:  local

}

foo()
console.log('x: ', x); // x:  global
