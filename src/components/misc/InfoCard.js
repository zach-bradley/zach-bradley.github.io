import React from 'react';
import './InfoCard.css'

function InfoCard({title, subtitle, start, end, body}) {
  return (
    <div className="InfoCard">
      <div className="InfoCard-Header">
      <p className="InfoCard-Title">{title}</p>
      <p className="InfoCard-Date">{start} - {end}</p>
      </div> 
      <p className="InfoCard-Position">{subtitle}</p>
      <p>{body}</p>
    </div>
  )
}

export default InfoCard
