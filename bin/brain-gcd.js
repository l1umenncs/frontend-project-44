#!/usr/bin/env node

import { gcd, generationNumber } from '../src/helpers/helpers.js'
import runGame from '../src/runGame.js'

const generationGcdQuestion = () => {
  const a = generationNumber()
  const b = generationNumber()

  const correctAnswer = String(gcd(a, b))

  const question = `${a} ${b}`

  return [question, correctAnswer]
}

const description = 'Find the greatest common divisor of given numbers'
runGame(description, generationGcdQuestion)
