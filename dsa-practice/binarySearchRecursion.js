let arr = [2,4,6,8,10,12,14];
let target = 10;





function binary(arr ,target , low  = 0 , high = arr.length-1){
  
  if(low>high) return -1
  
  let mid = Math.floor((high+low)/2)
  
  if(arr[mid]===target){
    return mid
    
  }
  else if(arr[mid]>target){
    
    return binary(arr,target,low,mid-1)
  }else{
   return binary(arr,target,mid+1,high)
  }
  
}


console.log(binary([2,4,6,8,10],8))












