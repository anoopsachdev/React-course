import { useState } from 'react'
// useState is responsible for changing the state of a variable/element
// it does not mean its responsible for changing the value of the variable. 
// it is responsible for propogating this change throughout the UI (i.e DOM).
import './App.css'

function App() {
  let [counter, setCounter]= useState(15) // you can put const as well. you can change the values inside a const array, You just can’t reassign the whole array to a new one.
  // useState(default_value)
  // useState gives you two things in the format of an array. that is why you put []
  // setCounter will be the method that will control the variable counter

  // react reacts to the updation in variables. It brings UI Updation feature.
  // now in javascript if you had to update the value of counter on onclick you would have to do document.getelementbyId by classname, by tagname, by etc etc etc.
  // but in react that one variable if its value changes, its value now can change anywhere. so all that javascript jargon is all gone thanks to the help of hooks in react
  // reacts provides special methods called hooks. and only through the use of hooks you can update your data.
  
  // let counter = 15 // I no longer need this variable, counter is initialised in useState itself
  // the variable above would be updated but it would not be reflected on the DOM or UI, that only hooks do.
  const addValue = () => {
    // counter++;
    // counter will not be updated like this. you have to use the function mentioned in the useState hook. Only then react would know that the state of value has been changed and it has to update it in the UI/DOM as well.
    setCounter((prevCounter) => {}); 
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    
    console.log("Value added", counter);
  }
  const removeValue = () => {
    counter--;
    setCounter(counter)
    console.log("Value removed", counter);
  }
  return (
    <>
    <h1>Understanding concept: Our first hook</h1>
    <h2>Counter: {counter}</h2>
    <button 
    id='add'
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>
      {counter}
    </p>
    <footer>
      {counter}
    </footer>
    </>
  )
}
export default App
// notes:
// kull milake baat ye ki jo setCounter value leta hai vo ye value leta hia ki nayi value batao jisko counter mei dallun.