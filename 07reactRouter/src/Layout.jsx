import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> 
    <Footer/>
    
    </>
  )
}

export default Layout

// wherever you put Outlet you can change things.
// According to documentation it is where you add child components/nested pages.


// through the help of Outlet we did nesting
// layout sometimes is also kept with the name 'root'