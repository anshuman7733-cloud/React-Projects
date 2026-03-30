import React from 'react'
import {Home, Header, Footer} from "./components/index" 
import { Outlet } from 'react-router'

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