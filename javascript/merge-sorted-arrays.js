
let a =[1,3,5], b =
[2,4,6],res =[];



function merge(a,b){
  
  let i = 0 , j = 0 , res =[]
  
  while(i<a.length && j<b.length){
    
    if(a[i]<b[j]){
      res.push(a[i])
      i++
    }else{
       res.push(b[j])
      j++
      
    }
  }
  
    while (i < a.length) {
    res.push(a[i])
    i++
  }

  while (j < b.length) {
    res.push(b[j])
    j++
  }
  
  return res
}