import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/Vector.png'
function Navbar() {
  return (
    <div>
        <nav>
        <img src={logo} alt='dt' className='nav--logo'/>
        </nav>
    </div>
  )
}

export default Navbar