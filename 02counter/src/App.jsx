import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
  const addvalue = () => {
    if(counter < 20)
    setCounter(counter + 1);
  };
  const removevalue = () => {
    if(counter > 0)
    setCounter(counter - 1);
  };
  const customvalue = (e) => {
    let temp = parseInt(e.target.value);
    if(isNaN(temp) !== true && (counter+temp) <= 20 && (counter+temp) >= 0)
    setCounter(counter + temp)
  }
  

  return (
    <>
      <h1>Myself Imagine</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addvalue}>Add Value</button><br/>
      <button onClick={removevalue}>Remove Value</button><br/>
      <input  type = 'number' onChange={customvalue}></input>
    </>
  )
}

export default App
