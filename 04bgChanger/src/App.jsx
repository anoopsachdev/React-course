import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#5D3FD3")

  const colors = {
    deepPlum: "#5D3FD3",       // bold violet with class  
    forestGreen: "#1B4D3E",    // dark natural green  
    midnightBlue: "#191970",   // deep and calming blue  
    espressoBrown: "#4B2E05"  // earthy brown tone  
  }

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-4xl'>
          <button
          className='outline-none px-4 py-3 rounded-full text-white shadow-lg'
          style = {{backgroundColor: colors.deepPlum}}
          onClick = {() => setColor(colors.deepPlum)}
          >deepPlum</button>
          
          <button
          className='outline-none px-4 py-3 rounded-full text-white shadow-lg'
          style = {{backgroundColor: colors.forestGreen}}
          onClick = {() => setColor(colors.forestGreen)}
          >forestGreen</button>

          <button
          className='outline-none px-4 py-3 rounded-full text-white shadow-lg'
          style = {{backgroundColor: colors.midnightBlue}}
          onClick = {() => setColor(colors.midnightBlue)}
          >midnightBlue</button>

          <button
          className='outline-none px-4 py-3 rounded-full text-white shadow-lg'
          style = {{backgroundColor: colors.espressoBrown}}
          onClick = {() => setColor(colors.espressoBrown)}
          >espressoBrown</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
