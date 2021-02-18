import React from 'react';
import { Card, CardBody, CardImg, CardText, Container } from 'reactstrap';
import HappyHour from '../../assets/happyhour.jpg';
import './Projects.css'

function Projects() {
  return (
    <div className="Projects">
    <Container>
      <Card className="Projects-Card">
        <CardImg src={HappyHour}/>
        <CardBody>
          <CardText>Final Capstone project from Springboard. A bar finder with Google Maps integration. Build using React, Firebase, and the Google Maps API.</CardText>
        </CardBody>
      </Card>    
    </Container>
    </div>
  )
}

export default Projects
