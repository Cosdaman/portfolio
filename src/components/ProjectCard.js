import React from 'react';
import { Button, Card, Row } from 'react-bootstrap'

export default function ProjectCard(props) {

    return (
        <section className={`${props.projects.type}`} style={{ width: 'fit-content', margin: 'auto' }}  >
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.projects.name}</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Text>
                        {props.projects.description}
                    </Card.Text>
                    <Row>
                        <Button href="#">Card Link</Button>
                        <Button href="#">Another Link</Button>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    );
}
