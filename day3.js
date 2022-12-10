// https://www.w3schools.com/js/

const fs = require("fs");

fs.readFile("./resources/day3_part1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let lines = data.split("\n");
  let tot = 0;

  for (line of lines) {
    let len = (line.length)
    let left = line.substring(0, len/2)
    let right = line.substring(len / 2, len);
    console.log('left: %s, right: %s', left, right)

    let common = new Set()
    for (let i=0; i < len/2; i++) {
      if (right.includes(left.charAt(i))) {
        common.add(left.charAt(i));
      }
    }
    // console.log(common)
    common.forEach(function(c) {
      let num = c.charCodeAt(0) - 96
      if (num < 0) {
        num += 58
      }
      console.log(c, num);
      tot += num
    });



  };
  console.log(tot)

});

