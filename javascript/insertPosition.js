// Insert value at a specific position (no built-ins)




let arr = [1,2,3,4,5];
let value = 99;
let position = 2;

for (let i = arr.length; i > position; i--) {
  arr[i] = arr[i - 1];
}

arr[position] = value;

console.log(arr);