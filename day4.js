// https://www.w3schools.com/js/

const { create } = require("domain");
const fs = require("fs");

fs.readFile("./resources/day4.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let lines = data.split("\n");
  let fullIntersects = 0;
  let numIntersects = 0;


  for (line of lines) {
    elves = line.split(",");
    elf1 = createSet(elves[0])
    elf2 = createSet(elves[1])

    if (doesItFullyIntersect(elf1, elf2)) {
      fullIntersects += 1;
    }

    if (doesItIntersect(elf1, elf2)) {
      numIntersects += 1;
    }
  };

  console.log(fullIntersects);
  console.log(numIntersects);
});

function createSet(rangeString) {
  [a, b] = rangeString.split("-");
  result = new Set();
  for (let i = (+a); i <= (+b); i++) {
    result.add(i);
  }
  return result;
}

function interSect(set1, set2) {
  interSet = new Set();
  for (elem of set1.values()) {
    if (set2.has(elem)) {
      interSet.add(elem);
    }
  }
  return interSet;
}

function doesItFullyIntersect(elf1, elf2) {
  interSet = interSect(elf1, elf2);

  if (interSet.size == elf1.size || interSet.size == elf2.size) {
    console.log(elf1);
    console.log(elf2);
    console.log(interSect(elf1, elf2));
    return true;
  } else {
    return false;
  }
}

function doesItIntersect(elf1, elf2) {
  interSet = interSect(elf1, elf2);
  return interSet.size > 0;
}

