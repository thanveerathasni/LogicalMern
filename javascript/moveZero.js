// Move all zeros to the front (no built-ins)
let arr = [5,0,4,0,3,0,0,5];
  let ind = 0


for(let i = 0 ; i < arr.length ;i++){
  

  
  if(arr[i] ==0){
    
   [arr[ind],arr[i] ]= [arr[i] , arr[ind]]
   
   ind++;
  }
  
  
}

console.log(arr)