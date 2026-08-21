import React from 'react'
import { Link } from 'react-router'

const NavMenu = ({setCurrentPage}) => {
  return (
    <nav >
      <ul ClassName="nav-menu">
        <li><Link ClassName="link" to ="/">Home</Link></li>
        <li><Link ClassName="link" to ="/about">About</Link></li>
        <li><Link ClassName="link" to ="/application">Application</Link></li>
        {/* <li><Link ClassName="link" to =""></Link></li> */}

      </ul>
    </nav>
  
      
      
    
  )
}

export default NavMenu