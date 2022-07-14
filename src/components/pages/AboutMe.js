import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatar from '../../images/avatar.png'
import '../../styles/AboutMe.css'


export default function AboutMe() {

  return (
    <Container className='pt-2'>
      <Row>
        <Col>
          <img className="profilePhoto d-block mx-auto" src={avatar} alt="avatar" />
        </Col>
        <Col className='d-flex flex-column align-items-center' style={{ textAlign: 'center' }}>
          <p>Hello there, I'm Kevin. It's nice to meet you. </p>
          <p>You found my webpage! You'll find all sorts of stuff about me here!</p>
          <p>Let me tell you a bit about myself.</p>
        </Col>
      </Row>
      <Row>
        <h1 id='about'>About Me</h1>
        <p>I have a degree in Computer Engineering from DLSU-Manila, a diploma in Business IT Management from BCIT and a certificate in full stack web development from the University of Washington.
        </p>
        <p>Currently, I've been working for about half a year as a Teaching Assistant at a full stack web developer program, with an average class size of 40 students. I utilize my knowledge in the MERN stack to support students and troubleshoot any issues they may have. </p>
        <p>I've also been studying Data Engineering with Per Scholas to expand my skill set in various technologies such as python and linux; and techniques in data manipulation, data warehousing, and data visualization.
        </p>

        <p>I love creating solutions and constantly improving processes and  I'd love the opportunity to be able to work with others to help achieve goals and solve problems.</p>
        <p>I'd love to connect on <a href="https://www.linkedin.com/in/kevin-jc-ang/">LinkedIn</a> discuss any potential and upcoming opportunities. I look forward to answering any questions you might have for me.</p>
        <p>Thank you for taking the time to read!</p>

      </Row>
    </Container>
  );
}


