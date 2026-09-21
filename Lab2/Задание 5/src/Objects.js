export function personUpdate(data) {
  if (data.gender === "female") {
    delete data.age
  } else if (data.gender === "male" && !("income" in data)) {
    data.income = 100000
  }

  return data
}

export function objectFieldsList(obj1, obj2, obj3) {
  const fields = [
    ...Object.keys(obj1),
    ...Object.keys(obj2),
    ...Object.keys(obj3),
  ]

  return [...new Set(fields)].sort()
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value
  }

  const copy = {}
  for (const key of Object.keys(value)) {
    copy[key] = deepClone(value[key])
  }

  return copy
}

export function objectClone(obj, count) {
  const result = []

  for (let i = 0; i < count; ++i) {
    const clone = deepClone(obj)
    clone.id = i
    result.push(clone)
  }

  return result
}
