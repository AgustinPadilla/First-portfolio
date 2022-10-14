import React from 'react'
import { Routes, Route, BrowserRouter, NavLink} from 'react-router-dom'
import { Contact } from '../components/Contact'
import { Curriculum } from '../components/Curriculum'
import { Home } from '../components/Home'
import { Projects } from '../components/Projects'
import { Footer } from '../layout/Footer'
import { HeaderNav } from '../layout/HeaderNav'

export const MainRoutes = () => {
  return (
    <BrowserRouter>

    {/* Header and nav */}
    <HeaderNav/>

    {/* Main content */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/curriculum' element={<Curriculum/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>

    {/* Footer */}
    <Footer/>
    </BrowserRouter>
  )
}
