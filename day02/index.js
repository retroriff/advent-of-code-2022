const fs = require('fs')

const puzzle = fs.readFileSync('./input.txt', 'utf-8')

const rock = 1
const paper = 2
const scissors = 3

const pointsDraw = 3
const pointsWin = 6

const getPoints = (item) => {
  switch (item) {
    case 'A':
    case 'X':
      return rock
    case 'B':
    case 'Y':
      return paper
    default:
      return scissors
  }
}

const games = puzzle
  .split('\n')
  .map((line) => line.split(' '))
  .map((player) => {
    const elf = getPoints(player[0])
    const me = getPoints(player[1])

    // Draw
    if (elf === me) {
      return pointsDraw + me
    }

    // Win
    switch (elf) {
      case rock:
        if (me === paper) {
          return pointsWin + paper
        }
        break
      case paper:
        if (me === scissors) {
          return pointsWin + scissors
        }
        break
      default:
        if (me === rock) {
          return pointsWin + rock
        }
    }

    // Loss
    return me
  })
  .reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(games)
