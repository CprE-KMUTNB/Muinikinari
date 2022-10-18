import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import './navbar.css';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
  <p><Link className='navbar-links_container' to='/'>Home</Link></p>
  <p><Link className='navbar-links_container' to='/recommend'>Recommend</Link></p>
  <p><Link className='navbar-links_container' to='/review'>Get reviews</Link></p>
  </>
)
/*Ps.ส่วนของคำสั่งtoggle ใช้สำหรับแสดงผลหน้าเพจบนมือถือ*/
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar-links_container'>
          <p><Link className='navbar-links_container' to='/'>Home</Link></p>
          <p><Link className='navbar-links_container' to='/recommend'>Recommend</Link></p>
          <p><Link className='navbar-links_container' to='/review'>Get reviews</Link></p>
        </div>
      </div>
      <div className='navbar-sign'>
      <p>Sign in</p>
      <button type='button'>Sign up</button>
    </div>
    <div className='navbar-menu'>
      {toggleMenu 
      ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false) }/>
      : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true) }/>
      }
      {toggleMenu && (
        <div className='navbar-menu_container scale-up-center'>
          <div className='navbar-menu_container-links'>
          <Menu />
          <div className='navbar-menu_container-links-sign'>
          <p>Sign in</p>
      <button type='button'>Sign up</button>
    </div>
          </div>
        </div>
      )}
      
    </div>
    </div>
  )
}



export default NavBar