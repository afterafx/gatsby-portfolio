import React from 'react'
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'

import '../styles/navbar.scss'

const linkStyle = {
  marginRight: '15px',
  fontFamily: 'Roboto',
  fontSize: '20px',
  color: 'var(--grey)',
}

const NavBar = () => (
  <div className="root">
    <Navbar className="nav-bar" bg="none" sticky="top">
      <Link style={linkStyle} activeStyle={{ color: 'var(--primary)' }} to="/">
        Home
      </Link>
      <Link style={linkStyle} activeStyle={{ color: 'var(--primary)' }} to="/portfolio/">
        Portfolio
      </Link>
      <Link style={linkStyle} activeStyle={{ color: 'var(--primary)' }} to="/blog/">
        Blog
      </Link>
      <Link style={linkStyle} activeStyle={{ color: 'var(--primary)' }} to="/contact/">
        Contact
      </Link>
    </Navbar>
  </div>
)

export default NavBar
