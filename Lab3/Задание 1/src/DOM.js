export function appendToBody(tag, content, count) {
  for (let i = 0; i < count; ++i) {
    const element = document.createElement(tag)
    element.textContent = content
    document.body.append(element)
  }
}

export function generateTree(childrenCount, level) {
  function createNode(depth) {
    const node = document.createElement("div")
    node.className = `item_${depth}`

    if (depth < level) {
      for (let i = 0; i < childrenCount; ++i) {
        node.append(createNode(depth + 1))
      }
    }

    return node
  }

  return createNode(1)
}

export function replaceNodes() {
  const tree = generateTree(2, 3)

  tree.querySelectorAll(".item_2").forEach((oldNode) => {
    const section = document.createElement("section")
    section.className = oldNode.className

    section.append(...oldNode.childNodes)

    oldNode.replaceWith(section)
  })

  return tree
}
