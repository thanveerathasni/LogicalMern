




class queWithStack{
  constructor(){
      this.s1 = []
   this.s2 = []
    
  }
  
  enq(data){
   return this.s1.push(data)
    
    
  }
  
  dequeue(){
    
    if (this.s2.length==0) {
while(this.s1.length>0){
  this.s2.push(this.s1.pop())
  
}      
    }
  return  this.s2.pop()
    
    
    
  }
  
 print() {
  let res = []

  for (let i = this.s2.length - 1; i >= 0; i--) {
    res.push(this.s2[i])
  }

  for (let i = 0; i < this.s1.length; i++) {
    res.push(this.s1[i])
  }

  console.log(res)
}
  
}
let q = new queWithStack()

q.enq(9)

q.enq(8)
q.enq(7)
q.enq(6)
q.enq(5)
console.log(q.dequeue()
)

q.print()












