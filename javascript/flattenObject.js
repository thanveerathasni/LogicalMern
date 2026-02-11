
let obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
}


function flatten(obj,parent="",res={}){
  
 for(let k in obj){
   
    
  let key =  parent? `${parent}.${k}`:k
  if(typeof  obj[k]==="object" && obj[k]!==null){
    flatten(obj[k],key,res)
    
    
  }else{
  
  res[key] = obj[k]
 }}
 return res
 
}

console.log(flatten(obj))

