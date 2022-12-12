const fs = require('fs')

const puzzle = fs.readFileSync('./input.txt', 'utf-8')

const all = puzzle
  .split('\n\n')
  .map((line) =>
    line
      .split('\n')
      .map((value) => parseInt(value))
      .reduce((accumulator, currentValue) => accumulator + currentValue)
  )
  .sort(function (a, b) {
    return b - a
  })

const solution1 = all[0]

const solution2 = all
  .slice(0, 3)
  .reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(solution1, solution2)
