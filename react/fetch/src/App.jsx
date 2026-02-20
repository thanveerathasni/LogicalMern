import React from 'react'
import { useState,useEffect } from 'react'
const App = () => {
  const [product,setproducts] = useState([])
useEffect(()=>{
  fetch("https://dummyjson.com/products")
  .then((res)=> res.json())
.then(res => setproducts(res.products))
.catch((err)=> err)
},[])

  return (
    <div>
      <h1></h1>
      
<ul>
{product.map((item,index)=>(<li key={index}>{item.title}</li>))}


</ul>


    </div>
  )
}

export default App
