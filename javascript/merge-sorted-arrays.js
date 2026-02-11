
// let a =[1,3,5], b =
// [2,4,6],res =[];



// function merge(a,b){
  
//   let i = 0 , j = 0 , res =[]
  
//   while(i<a.length && j<b.length){
    
//     if(a[i]<b[j]){
//       res.push(a[i])
//       i++
//     }else{
//        res.push(b[j])
//       j++
      
//     }
//   }
  
//     while (i < a.length) {
//     res.push(a[i])
//     i++
//   }

//   while (j < b.length) {
//     res.push(b[j])
//     j++
//   }
  
//   return res
// }















function merge(arr,arr1){
  
  let i = 0 ; j = 0 , res = []
  
  while(i<arr.length && j<arr1.length){
    if(arr[i]<arr1[j]){
      res.push(arr[i])
      i++
      
      
      
    }else{
      
       res.push(arr1[j])
      j++
      
    }
    
  }
  
  
  while(i<arr.length){
     res.push(arr[i])
      i++
      
    
  }
  
  
  
   
  while(j<arr1.length){
     res.push(arr1[j])
      j++
      
    
    
  }
  return res
}

console.log(merge([2,4,5],[1,3,6]))















