

// function rotateLeft(arr) {
  
//   let first = 0 
//   let last = arr.length-1
//   for(let i = 0 ; i < arr.length ; i++){
    
// if(i%2==0){
  
//   [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
// }
//    i++
    
//   }
//   return arr
  
  
// }

// let arr=["a","B","a","B"]

// console.log(rotateLeft(arr))












function swapPairs(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = temp
  }

  return arr
}

let arr = ["a","B","a","B"]
console.log(swapPairs(arr))