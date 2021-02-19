import React from 'react';
import Header from '../misc/Header';
import InfoCard from '../misc/InfoCard';
import './Education.css'

function Education() {
  return (
    <div className="Education">
      <Header text="Education" />
      <div className="Education-Body">
        <InfoCard title="Springboard" subtitle="Software Engineering Certificate" start="Jan 2020" end="Jan 2021" body="700 hour course covering the key aspects of front and backend development, databases, and data structure and algorithms. Worked on two capstone projects which were solely planned and coded. Larger assessments were subject to coding reviews."/>
        <InfoCard title="Luzerne County Commmunity College" subtitle="Associates in Business Administration" start="Sep 2016" end="June 2019" />
      </div>
    </div>
  )
}

export default Education
