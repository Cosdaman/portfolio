import React from 'react';
import avatar from '../assets/images/avatar.png'
import '../assets/css/style.css'

export default function About() {
  return (
    <div className="row mx-auto" id="about">
      <div className="container-fluid row py-3">
        <img className="profilePhoto" src={avatar} alt="Cosdaman Avatar Profile Picutre"></img>
      </div>
      <h2>About</h2>
      <p>Hi there! My name is Kevin! </p>
      <p>I'm currently undergoing a course to earn a certificate in full stack web development with newly acquired
        and developing skills in the MERN stack; in addition to existing knowledge and skills in the following:
      </p>
      <div className="row-12">
        <ul id="skillsList">
          <li>Python</li>
          <li>Java</li>
          <li>mySQL</li>
          <li>GIT</li>
        </ul>
      </div>
      <p>I am usually known as a leader, shot-caller, and passionate problem-solver within a team.</p>
      <p>Each project that I am involved with is aimed to have quick, innovative, and efficient solutions towards
        problems; with a focus on maintaining a good client relationship.</p>
      <p>I look forward to using my skills to create and engineer functional solutions while ensuring the utmost
        quality and performance for clients.</p>
    </div>
  );
}
