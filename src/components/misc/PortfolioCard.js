import React from 'react';
import './PortfolioCard.css'

function PortfolioCard({imgsrc, title, body, link}) {
  return (
    <div className="Projects-Card">
    <img src={imgsrc} alt={title}/>
    <div className="Projects-CardBody">
      <p className="Card-Body-Title">{title}</p>
      <p>{body}</p>
      <a href={link}>See project</a>
    </div>
  </div>
  )
}

export default PortfolioCard
