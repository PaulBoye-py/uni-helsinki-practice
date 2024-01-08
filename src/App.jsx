import { useState } from "react"
import Display from "./components/Display"


function App() {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    console.log('New Value', newValue)
    setValue(newValue)
  }

 
  // console.log(triple(10))

  return (
    <>
      <div>
        <Display />
        {value}
        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(50)}>fifty</button>
        <button onClick={setToValue(value + 1)}>Increment</button>
        <button onClick={setToValue(0)}>Reset</button>
      </div>
     
    </>
    
  )
  
}

export default App
