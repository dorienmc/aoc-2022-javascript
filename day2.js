// https://www.w3schools.com/js/
// A: rock
// B: paper
// C: scissors
//
// X: Rock (1)
// Y: Paper (2)
// Z: Scissors (3)
//
// Lose (0)
// Draw (3)
// Win (6)
//
//         | A (r)   | B (p)   | C (sci)
// X (roc) | d (3+1) | l (0+1) | w (6+1)
// Y (pap) | w (6+2) | d (3+2) | l (0+2)
// Z (sci) | l (0+3) | w (6+3) | d (3+3)

const score1 = new Map([
  ["A X", 4],
  ["A Y", 8],
  ["A Z", 3],
  ["B X", 1],
  ["B Y", 5],
  ["B Z", 9],
  ["C X", 7],
  ["C Y", 2],
  ["C Z", 6]
])
const fs = require("fs");

fs.readFile("./resources/day2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let lines = data.split("\n");
  let totScore = 0;

  for (line of lines) {
    //console.log(score1.get(line));
    totScore += (score1.get(line));
  };

  console.log("Score " + totScore)

});

// Part 2
// X: should lose (0)
// Y: should draw (3)
// Z: should win (6)
//
// Rock (1)
// Paper (2)
// Scissors (3)
//
//         | A (r)   | B (p)   | C (sci)
// X (lose)| s (0+3) | r (0+1)    | p (0+2)
// Y (draw)| r (3+1) | p (3+2)    | s (3+3)
// Z (win) | p (6+2) | s (6+3)    | r (6+1)

const score2 = new Map([
  ["A X", 3],
  ["A Y", 4],
  ["A Z", 8],
  ["B X", 1],
  ["B Y", 5],
  ["B Z", 9],
  ["C X", 2],
  ["C Y", 6],
  ["C Z", 7],
]);

fs.readFile("./resources/day2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let lines = data.split("\n");
  let totScore = 0;

  for (line of lines) {
    console.log(line)
    console.log(score2.get(line));
    totScore += score2.get(line);
  }

  console.log("Score " + totScore);
});