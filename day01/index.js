const fs = require('fs')

const puzzle = fs.readFileSync('./input.txt', 'utf-8')

const common = puzzle
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

const solution1 = common[0]

const solution2 = common
  .slice(0, 3)
  .reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(solution1, solution2)
