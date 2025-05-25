import {useState} from 'react'

function Colourpalete(){
   const body = document.querySelector('body');
   let [Colour, Change] = useState('Grey');
   body.style.backgroundColor = Colour;

   function changecolour(colour){
      Change(colour)
      body.style.backgroundColor = Colour;
   }

   return(
      <>
         <button onClick={() => changecolour('Magenta')}>Magenta</button>
         <button onClick={() => changecolour('Black')}>Black</button>
         <button onClick={() => changecolour('Grey')}>Grey</button>
         <button onClick={() => changecolour('#FFE5B4')}>Peach</button>
         <br />
         <h2>Background Colour: {Colour}</h2>
      </>
   )
}

export default Colourpalete