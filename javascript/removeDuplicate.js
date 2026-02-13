let arr = [1,2,2,3,4,4,5];
let res = [];
let resind = 0 


for(let i =0 ;i<arr.length ; i ++){
  
  
  let found = false 
  
  
  for(let j = 0  ;j<resind ; j++){
    
    if(arr[i]== res[j]){
      
      found =  true
      break 
    }
    
  }
  
  if(!found){
    
    res[resind] = arr[i]
    resind++
  }
}

console.log(res)