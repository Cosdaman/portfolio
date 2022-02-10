import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import '../../styles/Contact.css'

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
      } else {
        setErrorMessage('');
      }
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!userName || !message) {
      setErrorMessage('All fields are required.');
      return;
    }

    setUserName('');
    setMessage('');
    setEmail('');
    setErrorMessage('Successfully submitted form.');
  };

  return (
    <Container className='d-flex flex-column mt-2 justify-content-center align-items-center'>
      <h1>Contact Me</h1>
      <p>This page is a WIP for contacting me.</p>
      <p>In the meantime, feel free to contact me through the following:</p>
      <p>E-mail: <a href="mailto:kjc.ang@gmail.com">kjc.ang@gmail.com</a></p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="E-mail"
        />
        <br></br>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Username"
        />
        <br></br>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <br></br>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </Container>
  );
}


