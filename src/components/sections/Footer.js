import React from 'react';
import Header from '../misc/Header';
import './Footer.css'

function Footer() {
  return (
    <div className="Footer">
      <Header text="Links" />
      <div className="Footer-Links">
        <a href="https://github.com/zach-bradley"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/zachary-bradley-2295646a/"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
  )
}

export default Footer
