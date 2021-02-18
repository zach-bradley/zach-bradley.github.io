import React from 'react';
import {Jumbotron} from 'reactstrap';
import './Intro.css';
import Resume from '../../assets/Resume.pdf';
import Selfie from '../../assets/flannel.jpg';

function Intro() {
  return (
    <div className="Intro">
      <Jumbotron className="Intro-Jumbotron" fluid>
        <div className="Jumbotron-Left">
          <img src={Selfie} alt="Selfie" />
        </div>
        <div className="Jumbotron-Right">
          <div className="Jumbotron-Title">Zachary Bradley</div>
          <div className="Jumbotron-SubTitle">Software Engineer</div>
          <a href={Resume} download="Resume" className="mt-3 p-3">Download Resume</a>        
        </div>

      </Jumbotron>
    </div>
  )
}

export default Intro
