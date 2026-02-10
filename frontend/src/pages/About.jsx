import React, { use } from "react";
import { useEffect } from "react";  
import { Container, Row,Col } from 'react-bootstrap';
import '../assets/css/About.css';

const About = () => {

    useEffect(() => {
        document.title = "About Me | Ajay Maddineni";
    }, []); 
    return (
        <div className="page about-page">
            <Container className="py-5">

                <Row className="mb-5">
                    <Col>
                        <h1 className="page-title">About Me</h1>
                        <p className="page-subtitle"></p>
                    </Col>
                </Row>

                <Row className="about-section">
                    <Col>
                        <h3 className="section-title">Career Focus</h3>
                        <p className="section-text">Aspiring Software Engineer with a strong interest in frontend and Full Stack Development. I enjoy building  real-world web applications and continuously improving my skills in modern technologies like React, Flask, SQL, and Cloud Plaftforms and Python.</p>
                    </Col>
                </Row>

                <Row className="about-section">
                    <Col>
                        <h3 className="section-title">Education</h3>
                        <p className="section-text"><strong> Bachelor of Technology in Mechanical Engineering </strong> <br />
                            Narasaraopeta Engineering College <br />Graduated : 2024 </p>
                    </Col>
                </Row>

                <Row className="about-section">
                    <Col>
                        <h3 className="section-title">Certifications</h3>
                        <ul className="section-list">
                            <li>Python Programming - NPTEL, UMich(Coursera)</li>
                            <li>Microsoft Azure Fundamentals - Microsoft(AZ-900)</li>
                            <li>IBM Databses and SQL - Coursera(IBM)</li>
                            <li>AI Prompting Fundamentals - Databricks</li>
                            <li>Microsoft Power Platform Fundamentals - Microsoft(PL-900)</li>
                        </ul>
                    </Col>
                </Row>

                <Row className="about-section">
                    <Col>
                        <h3 className="section-title">WorkShops & Activities</h3>
                        <ul className="section-list">
                            <li>Pwc Switzerland PowerBI Job Simulation - Forage</li>
                            <li>Completed two months internship training in South Central Railways - Vijayawada</li>
                            <li>Participated in Master Orator Championship</li>
                            <li>Attended Workshop on IOT And Solar Panels</li>
                        </ul>
                    </Col>
                </Row>

                <Row className="about-section">
                    <Col>
                        <h3 className="section-title">Hobbies</h3>
                        <ul className="section-list">
                            <li>Playing Cricket</li>
                            <li>Exploring New Technologies</li>
                            <li>Building Personal Projects</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;