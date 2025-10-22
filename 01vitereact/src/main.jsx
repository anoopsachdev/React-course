import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// create element using React.createElement
const reactElement = React.createElement( 
  'a',
  {href: 'www.google.com'}
)

const anotherElement = (
  <p>Hi this is a react element (p tag) created as a variable in the main.jsx file!! Hope you enjoy this webpage</p>
)
createRoot(document.getElementById('root')).render(
    <App/>
)
