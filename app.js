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