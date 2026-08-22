import React from 'react'
import { Link } from 'react-router'

const NavMenu = () => {
  return (
    <nav >
      <ul className="nav-menu">
        <li>
          <Link className="link" to ="/">
          Home
          </Link>
        </li>
        <li>
          <Link className="link" to ="/about">
          About
          </Link>
        </li>
        <li>
          <Link className="link" to ="/application">
          Application
          </Link>
        </li>

        {/* <li><Link ClassName="link" to =""></Link></li> */}

      </ul>
    </nav>
  
      
      
    
  )
}

export default NavMenu