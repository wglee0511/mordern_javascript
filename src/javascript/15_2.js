let foo = 1

{
  console.log('foo: ', foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 2;
}

