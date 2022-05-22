import React from 'react'
import avatar from './images/avatar.jpg'

function Header() {
  return (
    <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" width="6.5%" className='logo'/>
        <img src={avatar} width="2.5%" alt="" className='avatar' />
    </header>
  )
}

export default Header