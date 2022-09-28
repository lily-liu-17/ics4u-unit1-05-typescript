/*
 * This is Board Program
 *
 * @author  Lily
 * @version 1.0
 * @since   2022-09-28
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 * Calculates board foot
 *
 * @param {number} length - length number
 * @param {number} width - width number
 * @returns {number} Return value
 */
function boardFoot(length: number, width: number): number {
  const volume = 144

  const height = volume / (length * width)

  return height
}

const lengthInput = prompt('Enter the length of the board: ')

const widthInput = prompt('Enter the width of the board: ')

const userLength = Number(lengthInput)
const userWidth = Number(widthInput)

if (isNaN(userLength) || isNaN(userWidth)) {
  console.log('Invalid Input')
} else {
  const heightOfBoard = boardFoot(userLength, userWidth)
  console.log(`The height of the board is ${heightOfBoard} inches`)
}

console.log('\nDone.')
