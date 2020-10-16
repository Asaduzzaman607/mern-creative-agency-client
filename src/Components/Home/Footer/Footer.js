import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="back-color" id="contact">
        <Container>
            <Row>
                <Col md={6}>
                    <div className="p-5 info-text">
                        <h3> Let us handle your  <br /> project, professionally</h3>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatibus, repudiandae <br /> sequi voluptate sunt accusamus totam </p>

                    </div>
                </Col>
                <Col md={6}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Email Address" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Your Name/ Company Name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="8" placeholder="Your Message" />
                        </Form.Group>
                        <Button variant="dark">Send</Button>
                    </Form>
                </Col>
            </Row>
            <p className="text-center pt-5">All rights reserved for Asaduzzaman Sajeeb | 2020</p>
        </Container>
    </div>
    );
};

export default Footer;