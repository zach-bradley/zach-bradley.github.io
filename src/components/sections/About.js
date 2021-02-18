import React from 'react';
import Header from '../misc/Header';
import './About.css'

function About() {
  return (
    <div className="About">
      <div className="About-Header">
        <Header text="About Me" />
      </div>
      <div className="About-Desc">
        <p>I'm a recent Software Engineering bootcamp alum looking to break into the tech industry and use all of the skills I've learned to help me make an impact. I'm an eager learner and can quickly integrate new skills into my work. I would love to work with a company that can help me grow as a developer.</p>
      </div>
    </div>
  )
}

export default About
