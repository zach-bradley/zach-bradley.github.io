import React from 'react';
import './Header.css'

function Header({text}) {
  return (
    <div className="Header">
      {text}
      <hr/>
    </div>
  )
}

export default Header
