import React from 'react';
import InfoCard from '../misc/InfoCard';
import Header from '../misc/Header';
import './Experience.css';

function Experience() {
  return (
    <div className="Experience">
      <Header text="Experience" />
      <div className="Experience-Body">
        <InfoCard title="American Eagle Outfitters" subtitle="Group Lead" start="Feb 2020" end="Present" body="Provide support to the distribution center Supervisors and manage coordinate workflow." />
        <InfoCard title="American Eagle Outfitters" subtitle="Operations Clerk" start="June 2019" end="Feb 2020" body="Work with products and databases to make sure the product is correct while solving any problems other associates have. " />
      </div>
    </div>
  )
}

export default Experience
