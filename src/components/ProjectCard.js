import React from 'react';
import { Button, Card, Row } from 'react-bootstrap'
import '../styles/ProjectCard.css'

export default function ProjectCard(props) {

    return (
        <section className={`${props.projects.type}`} style={{ width: 'fit-content', margin: 'auto' }}  >
            <Card className="bg-dark text-white mb-1" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.projects.name}</Card.Title>
                    <Card.Img variant="top" src={props.projects.screenshotLink} />
                    <Card.Text>
                        {props.projects.description}
                    </Card.Text>
                    <Row>
                        <Button className='btnLinks' href={props.projects.repoLink}>Github Repo</Button>
                        <Button className='btnLinks' href={props.projects.liveLink}>Link to Site</Button>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    );
}
