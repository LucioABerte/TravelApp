import React from 'react'
import { GiWorld } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
          <GiWorld />
        </div>
        <span className='title'>
            My travel Journal.
        </span>

    </div>
  )
}

export default Navbar