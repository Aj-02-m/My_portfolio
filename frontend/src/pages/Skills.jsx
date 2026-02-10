import React, { use } from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import "../assets/css/Skills.css";
import {FaPython,FaCode,FaDatabase,FaCloud,FaTools,FaVial,FaUsers} from "react-icons/fa";
import API_BASE_URL from '../config';

const Skills = () => {
    useEffect(()=>{
            document.title = "Skills | Ajay Maddineni";
    },[]);
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}api/skills`)
            .then(res => res.json())
            .then(data => setSkills(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p className='pt-5 mt-5 text-center text-light'>Loading Skills...</p>;
    }

    const iconMap = {
        "Programming Languages": <FaPython className='skill-icon'/>,
        "Development": <FaCode className='skill-icon'/>,
        "Databases": <FaDatabase className='skill-icon'/>,
        "Cloud & Deployment": <FaCloud className='skill-icon'/>,
        "Dev & AI Tools": <FaTools className='skill-icon'/>,
        "Testing": <FaVial className='skill-icon'/>,
        "Soft Skills": <FaUsers className='skill-icon'/>,
    };

    return (
        <div className='page'>
            <section className='mt-5 pt-5'>
                <Container>
                    <h2 className='mb-4 text-center skills-title'>Skills</h2>
                    <Row className='g-4'>{skills.map((skill, index) => (
                        <Col md={6} key={index}>
                            <Card className='skill-card shadow-sm'>
                                <Card.Body >
                                    <Card.Title className='icon_text'>{iconMap[skill.category]} {skill.category}</Card.Title>
                                    <Card.Text>{skill.skills.join(",")}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}</Row>
                </Container>
            </section>
        </div>
    );
}

export default Skills;