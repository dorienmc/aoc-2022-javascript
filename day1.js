const fs = require("fs");

fs.readFile("./resources/day1_example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let lines = data.split("\n");
  let best = 0;
  let secondbest = 0;
  let thirdbest = 0;
  let currentTotal = 0;

  for (line of lines) {
    if (line.length > 0) {
      currentTotal += (+line)
    } else {
      console.log(currentTotal)
      if (currentTotal > best) {
        thirdbest = secondbest;
        secondbest = best;
        best = currentTotal;
        console.log([best, secondbest, thirdbest])
      } else {
        if (currentTotal > secondbest) {
          thirdbest = secondbest;
          secondbest = currentTotal;
          console.log([best, secondbest, thirdbest]);
        } else {
          if (currentTotal > thirdbest) {
            thirdbest = currentTotal;
          }
          console.log([best, secondbest, thirdbest]);
        }
      }
      currentTotal = 0;
    }
  };
  // Also check last total
  console.log(currentTotal);
  if (currentTotal > best) {
    best = currentTotal;
  } else {
    if (currentTotal > secondbest) {
      thirdbest = secondbest;
      secondbest = currentTotal;
      console.log([best, secondbest, thirdbest]);
    } else {
      if (currentTotal > thirdbest) {
        thirdbest = currentTotal;
      }
      console.log([best, secondbest, thirdbest]);
    }
  }

  console.log("Best " + best)
  console.log(best + secondbest + thirdbest)

});

function isItBetter()


