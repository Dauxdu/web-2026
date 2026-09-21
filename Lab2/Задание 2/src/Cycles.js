export function rangeSum(start, end) {
  const from = Math.min(start, end)
  const to = Math.max(start, end)
  let sum = 0

  for (let i = from; i <= to; ++i) {
    if (i % 2 === 0) {
      sum += i
    }
  }

  return sum
}

export function iterationCount(a) {
  let value = a
  let count = 0

  while (value > 0.1) {
    value /= 2
    ++count
  }

  return count
}

export function symbolsReplace(message) {
  let result = ""
  let i = 0

  if (message.length === 0) {
    return result
  }

  do {
    result += (i + 1) % 3 === 0 ? "_" : message[i]
    ++i
  } while (i < message.length)

  return result
}
