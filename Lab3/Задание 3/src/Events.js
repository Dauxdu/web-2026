export function createButton() {
  const button = document.createElement("button")
  button.textContent = "Удали меня"

  button.addEventListener("click", () => {
    button.remove()
  })

  document.body.append(button)
}

export function createArrList(arr) {
  const list = document.createElement("ul")

  arr.forEach((text) => {
    const item = document.createElement("li")
    item.textContent = text

    item.addEventListener("mouseover", () => {
      item.setAttribute("title", item.textContent)
    })

    list.append(item)
  })

  document.body.append(list)
}

export function createLink() {
  const link = document.createElement("a")
  link.href = "https://tensor.ru/"
  link.textContent = "tensor"

  let isClicked = false

  link.addEventListener("click", (event) => {
    if (!isClicked) {
      event.preventDefault()
      link.textContent += ` ${link.getAttribute("href")}`
      isClicked = true
    }
  })

  document.body.append(link)
}

export function createList() {
  const list = document.createElement("ul")
  const button = document.createElement("button")
  button.textContent = "Добавить пункт"

  function addItem() {
    const item = document.createElement("li")
    item.textContent = "Пункт"
    list.append(item)
  }

  list.addEventListener("click", (event) => {
    const item = event.target.closest("li")
    if (item && list.contains(item)) {
      item.textContent += "!"
    }
  })

  button.addEventListener("click", addItem)

  addItem()
  document.body.append(list, button)
}
