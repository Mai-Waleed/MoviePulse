import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout() {
  return <>
    <Navbar />
    <div className="container w-full m-12">
    <Outlet></Outlet>
    </div>
    <Footer />
  </>
}

export default Layout