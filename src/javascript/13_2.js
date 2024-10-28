const outer = () => {
	console.log("global")
}

const bar = () => {
	const outer = () => {
		console.log("local")
	}
  outer()
}

bar()

var x = 1

function func1 () {
  x = 10
  func2()
}

function func2 () {
  console.log(x);
}

func1() // 10
func2() // 10
