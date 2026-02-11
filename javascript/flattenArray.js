function flattenArray(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i], result)
    } else {
      result.push(arr[i])
    }
  }
  return result
}