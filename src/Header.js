import React,{useState} from 'react'
import avatar from './images/avatar.jpg'
import { Link,NavLink,useNavigate} from 'react-router-dom'
import netflix from './images/netflix.png'
import { useEffect } from 'react';
function Header() {
  const[select,setSelect]=useState('');
  const history=useNavigate();
  const changeHandler=(e)=>{
    setSelect(e.target.value)
  }
  useEffect(()=>{
    history(select)
  },[select])
  return (
    <header>
        <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"  className='logo'/></Link>
        <Link to='/'><img src={netflix} alt="Netflix Logo"  className='logo1'/></Link>
        <div className="navlinks">
          <NavLink className='navlink' to='/'>Home</NavLink>
          <NavLink className='navlink' to='/movies'>Movies</NavLink>
          <NavLink className='navlink' to='/TVShows'>TV Shows</NavLink>
          <NavLink className='navlink' to='/Browse'>Browse</NavLink>
          <NavLink className='navlink' to='/Mylist'>My List</NavLink>
        </div>
        <Link to='/'><img src={avatar} alt="" className='avatar' /></Link>
        <select className='header__dropdown' value={select} onChange={changeHandler}>
          <option value="/" selected>Home</option>
          <option value="/movies">Movies</option>
          <option value="TVShows">TV Shows</option>
          <option value="/Browse">Browse</option>
          <option value="/Mylist">My List</option>
        </select>
    </header>
  )
}

export default Header