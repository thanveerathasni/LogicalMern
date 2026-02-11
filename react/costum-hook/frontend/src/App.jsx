import React ,{useState}from 'react'


const useToggle = (initial = false) =>{
  const [value, setValue] = useState(initial)

  const toggle = () => setValue(v => !v)

  return [value, toggle]
}




const App = () => {
const [open, toggle] = useToggle()

  return (
    <button onClick={toggle}>
      {open ? "ON" : "OFF"}
    </button>
  )
}

export default App
