import React from 'react'
import Header from './Components/Header/Header'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
    <div className=' px-52'>
    <Header></Header>
    <Outlet/>
    </div>
    </>
  )
}

export default Layout