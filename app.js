// global scope
let size, board

function initialize() {
  size = getBoardSize()
  board = generateBoard(size)
  renderBoard()
}

// function (local) scope
function initialize() {
  const playerName = getPlayerName()
  size = getBoardSize()
  board = generateBoard(size, playerName);
  renderBoard()
}


// global scope: a, foo
let a = 4

function foo(x) {
  // function scope (foo): x, b, bar
  let b = a * 4

  function bar(y) {
    // function scope (bar): y, c
    let c = y * b
    return c
  }

  return bar(b)
}

console.log(foo(a))

// you can look out, but you can't look in


// differences between let and var
function varTest() {
  var x = 1
  if (true) {
    var x = 2  // same variable!
    console.log(x)  // 2
  }
  console.log(x)  // 2
}

function letTest() {
  let x = 1
  if (true) {
    let x = 2  // different variable
    console.log(x)  // 2
  }
  console.log(x)  // 1
}

if (true) {
	var x = "yes"
}
console.log(x) // "yes"

if (true) {
	let y = "yes"
}
console.log(y) // ReferenceError: y is not defined