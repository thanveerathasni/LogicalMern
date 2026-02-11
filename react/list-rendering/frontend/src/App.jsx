
import React from 'react'

const App = () => {
   const items = ["Apple", "Orange", "Mango"]

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default App
