import React from 'react'
import { Navbar, Nav, } from 'react-bootstrap'
import './NavComponent.css';
import logopic from '../Assets/logo.png';
import dotpic from '../Assets/dot.png';

export default function NavComponent() {
  return (
    <div className='NavComponent container'>
      <Navbar className='navbar-comp'>
        <div>
          <img className='dot' src={dotpic} alt="pic" />
        </div>
        <Navbar.Brand href="#home">
          <img className='logo' src={logopic} alt="logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="e_overview" href="#home">
            <span>Overview</span>
          </Nav.Link>

          <Nav.Link className="e_asset" href="#features">Assets</Nav.Link>

        </Nav>

      </Navbar>
    </div>
  )
}



