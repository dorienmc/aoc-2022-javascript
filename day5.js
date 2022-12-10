// https://www.w3schools.com/js/

const { create } = require("domain");
const fs = require("fs");

fs.readFile("./resources/day5.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  /*
        [D]
    [N] [C]
    [Z] [M] [P]
    1   2   3
  */
  let cratesEX = ["ZN", "MCD", "P"];

  /*
  [V]         [T]         [J]
  [Q]         [M] [P]     [Q]     [J]
  [W] [B]     [N] [Q]     [C]     [T]
  [M] [C]     [F] [N]     [G] [W] [G]
  [B] [W] [J] [H] [L]     [R] [B] [C]
  [N] [R] [R] [W] [W] [W] [D] [N] [F]
  [Z] [Z] [Q] [S] [F] [P] [B] [Q] [L]
  [C] [H] [F] [Z] [G] [L] [V] [Z] [H]
  1   2   3   4   5   6   7   8   9
  */
 let crates = ["CZNBMWQV","HZRWCB","FQRJ","ZSWHFNMT","GFWLNQP","LPW","VBDRGCQJ","ZQNBW","HLFCGTJ"]

  let lines = data.split("\n");
  for (line of lines) {
    lhs = line.split(" from ")[0];
    rhs = line.split(" from ")[1];

    numToMove = lhs.split(" ")[1];
    fromStack = rhs.split(" to ")[0];
    toStack = rhs.split(" to ")[1];

    console.log(
      "move %d crates from stack %d to stack %d",
      numToMove,
      fromStack,
      toStack
    );
    crates = moveCreates(crates, numToMove, fromStack, toStack);
  }

  result = "";
  for (stack of crates) {
    result += stack.slice(-1);
  }
  console.log("result " + result);
});


function moveCreates(crates, numToMove, fromStackId, toStackId) {
  // console.log(crates)
  let fromStack = crates[fromStackId -1]
  let toStack = crates[toStackId - 1]

  for (let i = 1; i <= numToMove; i++) {
    let char = fromStack.slice(-1)
    console.log("move %s", char)

    // Remove from 'fromStack'
    fromStack = fromStack.substring(0, fromStack.length - 1)

    // Add to 'toStack'
    toStack = toStack.concat(char);

    // console.log(fromStack)
    // console.log(toStack)
  }

  crates[fromStackId - 1] = fromStack
  crates[toStackId - 1] = toStack
  console.log(crates)
  return crates
}


