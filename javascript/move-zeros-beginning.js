


let arr= [1,3,0,4,20,0]
 let index = 0

for(let i =0 ; i<arr.length ; i++){
 
  
    if(arr[i]==0){
     [ arr[i], arr[index]] = [arr[index],arr[i]]
      index++
    
  }
}
console.log(arr)






