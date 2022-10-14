import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header>

        <Navbar variant='dark' bg="dark" >
            <Navbar.Brand>Agustin Padilla - Desarrollo web</Navbar.Brand>
            <Nav defaultActiveKey="/home" className='justify-content-end flex-grow-1'>
                <Nav.Item className='m-3'>
                    <NavLink>Home</NavLink>
                </Nav.Item>
                <Nav.Item className='m-3'>
                    <NavLink>Curriculum</NavLink>
                </Nav.Item>
                <Nav.Item className='m-3'>
                    <NavLink>Projects</NavLink>
                </Nav.Item>
                <Nav.Item className='m-3'>
                    <NavLink>Contact</NavLink>
                </Nav.Item>
            </Nav>
        </Navbar>
    </header>
  )
}
