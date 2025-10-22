import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(15)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerate = useCallback(() => { 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str+= "!@#$%^&*-_+=~`"
    for (let i = 0; i <= length; i++){
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  // basically only when the function's dependecies or variables change only then the function is re-rendered
  // in passwordGenerate, you put setPasssword for optimization and memoization only.

  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length)
    window.navigator.clipboard.writeText(password)
    // window object
  }, [password])
  
  useEffect(() => {
    passwordGenerate()
  }, [length, numberAllowed, charAllowed, passwordGenerate])

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-neutral-900">
      <div className ='w-full max-w-md mx-auto shadow-lg p-6 rounded-2xl text-orange-400 bg-neutral-800'>
        <h1 className='text-xl font-semibold tracking-wide text-center text-white my-3'>Welcome to Password.me!!</h1>
        <div className='flex shadow rounded-lg mb-4'> 
          <input
            type="text"
            id="password" 
            value={password}
            className='outline-none w-full py-1 px-3 border border-gray-600 focus:border-blue-500 rounded-l-lg'
            placeholder='Set your Password with Password.me!!'
            readOnly
            ref={passwordRef}
          />
          
          <button
          onClick = {copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600 transition rounded-r-lg'
          >copy</button>
        </div>


        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              id="length"
              min = {6}
              max = {100}
              onChange = {(e) => {
                setLength(e.target.value)
              }}
            />
            <label htmlFor="length">Length: {length}</label>            
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              id="number" 
              defaultChecked = {numberAllowed} 
              onChange= {() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              id="charecter" 
              defaultChecked = {charAllowed}
              onChange = {() => {
                setCharAllowed((charAllowed) => !charAllowed)
              }}
            />
            <label htmlFor="charecter">Charecters</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
// for password generator you can expand your project by keeping a save passwords feature
// so you have a copy feature that is there.
// a new feature you can add is to save the password. and save the password with a specific name.
// like for example i wanted to generate a password for LMS.
// now i clicked on the stuff required and got my password generated.
// and now i saved it with the name THAPAR LMS. and now its saved in a tab called saved
// you can also store the website link for that password before saving it. 
// if i click saved it gives me a page of all saved passwords.
// but it only shows the name of the website (which on clicking will take you to that website), and not the password.
// you will have to re-enter your login password for password generator to see your password.
// now lets talk about login page.
// when you enter the app it will ask you to login.

// ALSO A REFRESH FEATURE FOR PASSWORD