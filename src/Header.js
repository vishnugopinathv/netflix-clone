import React from 'react'
import avatar from './images/avatar.jpg'
import { Link,NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
        <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"  className='logo'/></Link>
        <div className="navlinks">
          <NavLink className='navlink' to='/'>Home</NavLink>
          <NavLink className='navlink' to='/movies'>Movies</NavLink>
          <NavLink className='navlink' to='/TVShows'>TV Shows</NavLink>
          <NavLink className='navlink' to='/Browse'>Browse</NavLink>
          <NavLink className='navlink' to='/Mylist'>My List</NavLink>
        </div>
        <Link to='/'><img src={avatar} alt="" className='avatar' /></Link>
    </header>
  )
}

export default Header