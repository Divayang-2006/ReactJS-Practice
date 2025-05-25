import { useCallback, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Number, setNumber] = useState(9);
  const [allownumber, setallownumber] = useState(false);
  const [allowcharacter, setallowcharacter] = useState(false);
  const [Password, setPassword] = useState('adb');

  const passwordgenerator = useCallback(() => {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZadbcdefghijklmnopqrstuvwxyz"
    if(allownumber) str+="1234567890";
    if(allowcharacter) str+="-=+[];,./?!@#$%^&*()";
    for (let i = 0; i < Number; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
    }, [Number, allownumber, allowcharacter])

    const CopytoClipboard = () => {
      console.log('Coppied !');
      window.navigator.clipboard.writeText(Password);
    }
  
  useEffect(passwordgenerator,[Number, allownumber, allowcharacter])

  return (
    <div className="align-items-center place-items-center p-3 m-5">
      <div>
      <h1 className="align-middle text-amber-300">Password Generator</h1>
      <input 
        className='border-2 rounded-xl border-amber-950 m-0.5 px-1.5'
        type="text" 
        value={Password}
        readOnly
      /> <br />
      <input type="range" min={8} max={30} onChange={(e) => {setNumber(e.target.value)}}/><label>Length: {Number}</label><br />
      <input type="checkbox" onChange={() => setallownumber((prev) => !prev)} /><label>Include Numbers</label><br />
      <input type="checkbox" onChange={() => setallowcharacter((prev) => !prev)} /><label>Include Symbols</label><br />
      <button className='place-self-center border-2 rounded-xl border-amber-950 m-0.5 px-1.5 cursor-pointer hover:bg-amber-950' onClick={CopytoClipboard}>Copy</button>
      </div>
    </div>
  )
}

export default App
