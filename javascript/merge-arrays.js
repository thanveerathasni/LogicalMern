

// let a =[1,3,5], b =
// [2,4,6],res =[]

// for(let i =0 ;i< a.length;i++){
//   res.push(a[i])
  
// }
// for(let i =0 ;i <b.length ;i++){
//   res.push(b[i])
  
// }


// console.log(res)






let a = [1,2,3];
let b = ['a','b'];

let res = []

let max = Math.max(a.length,b.length)

for(let i = 0 ; i < max ; i++){
  
  if(i<a.length) return res.push(a[i])
  if(i<b.length) return res.push(b[i])
  
}



console.log(res)





