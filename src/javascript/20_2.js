"use strict";

function foo() {
  console.log(this);
	x = 10 // ReferenceError: x is not defined
}

foo()
