import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

// method - 1 for making router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contactus",
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

// method - 2 for making route (easier)
// Nested routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
      <Route path = '' element ={<Home/>}/>
      <Route path = 'about' element ={<About/>}/>
      <Route path = 'contactus' element ={<ContactUs/>}/>
      <Route path = 'user/:userid' element ={<User/>}/> 
      <Route
      loader = {githubInfoLoader} 
      path = 'github' 
      element ={<Github/>}
      
      />
    </Route>
  )
)
// very imp
// after 'user/:', anything after the colon is very important, you need to note it down.
// if you put id, that means your parameter would be in id. if you put userid, that means your parameter would be in userid. the component you have passed that is User would get access to the variable Userid
// example: <Route path = 'user/:userid' element ={<User/>}/>  
// http://localhost:5173/user/1
// so userid = 1

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
// now we will also be talking about how to make webpages specific to a user id. like how we if type https://github.com/hiteshchoudhary we will get hitesh sirs profile. just like that

// last part:
// new thing got introduced in react router which is there is next.js as well and it is called loader. it a property of <Route> tag 