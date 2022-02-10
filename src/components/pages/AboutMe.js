import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatar from '../../images/avatar.png'
import '../../styles/AboutMe.css'


export default function AboutMe() {

  const skills = ['Python', 'Git', 'Java', 'MySQL', 'Javascript', 'MongoDB', 'ExpressJS', 'React', 'NodeJS']
  const skillList = skills.map((element, i) => <li key={i}>{element}</li>)

  return (
    <Container className='pt-2'>
      <Row>
        <Col>
          <img className="profilePhoto d-block mx-auto" src={avatar} alt="avatar" />
        </Col>
        <Col className='d-flex flex-column align-items-center' style={{ textAlign: 'center' }}>
          <p>Hi there! My name is Kevin! </p>
          <p>You found my webpage! You'll find all sorts of stuff about me here!</p>
          <p>Let me tell you a bit about myself.</p>
        </Col>
      </Row>
      <Row>
        <h1 id='about'>About Me</h1>
        <p>I have a Bachelors of Science in Computer Engineering from De La Salle University in the Philippines, and a Diploma in Business IT Management from the British Columbia Institute of Technology in Vancouver, Canada.
        </p>
        <p> I'm currently undergoing a course to earn a certificate in full stack web development with newly acquired
          and developing skills in the MERN stack; in addition to existing knowledge and skills in the following: </p>
        <Row className='skills'>
          {skillList}
        </Row>
        <p>People usually know me as a leader, shot-caller, and passionate problem-solver within a team.</p>
        <p>Each project that I am involved with is aimed to have innovative, and effective solutions towards
          problems at hand.</p>
        <p>I am looking forward to the day I use my skills to create and engineer functional solutions while ensuring the utmost
          quality and performance for those involved.</p>
      </Row>
    </Container>
  );
}


