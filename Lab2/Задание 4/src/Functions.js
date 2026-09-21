export function higherThan(num) {
  return (element) => element > num
}

export function hasSubstring(substr) {
  return (element) => element.includes(substr)
}

export function multiply(num) {
  return (other) => num * other
}
