import { Container } from 'react-bootstrap'
import '../../styles/Contact.css'


export default function Contact() {

  return (
    <Container className='d-flex flex-column mt-2 justify-content-center align-items-center'>
      <h1>Contact Me</h1>
      <p>Feel free to contact me regarding projects and opportunites through the following methods:</p>
      <p>E-mail: <a href="mailto:kjc.ang@gmail.com">kjc.ang@gmail.com</a></p>

    </Container>
  );
}


