let tin = [1,2,3]
let jin = ["a","b","c"]
let result = []

let max = Math.max(tin.length, jin.length)

for (let i = 0; i < max; i++) {
  if (i < tin.length) result.push(tin[i])
  if (i < jin.length) result.push(jin[i])
}

console.log(result)