let data = {
  a: [1, 2],
  b: {
    c: [3, 4]
  }
}



function flattenMixed(data, parent = "", res = {}) {

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      let key = parent ? parent + "." + i : "" + i
      flattenMixed(data[i], key, res)
    }

  } else if (typeof data === "object" && data !== null) {
    for (let k in data) {
      let key = parent ? parent + "." + k : k
      flattenMixed(data[k], key, res)
    }

  } else {
    res[parent] = data
  }

  return res
}


console.log(flattenMixed(data))