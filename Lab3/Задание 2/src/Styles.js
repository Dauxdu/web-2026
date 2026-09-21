export function hasClass(elem, elemClass) {
  return elem.classList.contains(elemClass)
}

export function addClass(elem, elemClass) {
  elem.classList.add(elemClass)
}

export function removeClass(elem, elemClass) {
  elem.classList.remove(elemClass)
}

export function toggleClass(elem, elemClass) {
  elem.classList.toggle(elemClass)
}
