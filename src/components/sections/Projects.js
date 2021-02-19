import React from 'react';
import {Container } from 'reactstrap';
import HappyHour from '../../assets/happyhour.jpg';
import HealthyYou from '../../assets/healthyyou.JPG'
import Header from '../misc/Header';
import PortfolioCard from '../misc/PortfolioCard';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
    <Header text="Projects"/>
    <Container > 
        <PortfolioCard imgsrc={HappyHour} title="Happy Hour" body="Final Capstone project from Springboard. A bar finder with Google Maps integration. Build using React, Firebase, and the Google Maps API." link="https://happy-hour-79e9b.web.app/login" />      
        <PortfolioCard imgsrc={HealthyYou} title="Healthy You" body="First Capstone project from Springboard. Macro counter built fullstack with Python. I used the D3.js library for the graphs. Database is postgreSQL with flask." link="https://healthy-you-macro-counter.herokuapp.com/" />      
    </Container>
    </div>
  )
}

export default Projects
