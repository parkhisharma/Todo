import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
  return(
    <nav className="nav-wrapper blue dark-3">
      <div className="container">
        <NavLink to="/" className="brand-logo left">Textify</NavLink>
      
      <ul className='right'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/todos'>Todos</NavLink>
        </li>
        <li>
          <NavLink to='/notes'>Notes</NavLink>
        </li>
      </ul>
      </div>
    </nav>
  )
}
export default Navbar