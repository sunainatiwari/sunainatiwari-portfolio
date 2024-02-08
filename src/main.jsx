import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Header from './Components/Header/Header'
import Layout from './Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Resume from './Components/Resume/Resume'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
