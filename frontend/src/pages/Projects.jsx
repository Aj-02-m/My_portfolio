import React, { use } from "react";
import { useState, useEffect } from "react";
import { Container, Row, Card, Col } from 'react-bootstrap';
import { FaExternalLinkAlt,FaGithub } from "react-icons/fa";
import "../assets/css/Projects.css";
import API_BASE_URL from "../config";

const Projects = () => {
    useEffect(() => {
        document.title = "Projects | Ajay Maddineni";
    }, []);
    
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}api/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
            .finally(() => setLoading(false));
    }, []);

    const getStatusClass = (status = "") => {
        const s = status.toLowerCase();
        return s.includes("completed") ? "status-completed" : "status-progress";
    };

    if (loading) {
        return <p className='pt-5 mt-5 text-center text-light'>Loading Projects...</p>;
    }
    return (
        <div className='page'>
            <section className="mt-5 pt-5">
                <Container>
                    <h2 className="text-center projects-title mb-4">My Projects</h2>
                    <Row className="g-4">
                        {projects.map((project, index) => (
                            <Col key={index} md={6}>
                                <Card className=" project-card h-100 shadow-sm">
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between align-items-center">{project.title}
                                            {project.Status && (<span className={getStatusClass(project.Status)}>{project.Status}</span>)}
                                        </Card.Title>
                                        <Card.Text className="stack">{project.stack}</Card.Text>
                                        <Card.Text className="mt-2">{project.Description}</Card.Text>
                                        <div className="d-flex justify-content-between align-items-center project-actions">
                                            {project.live_link && (
                                                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm me-2"><FaExternalLinkAlt/>Live Demo</a>
                                            )}
                                            {project.repo_link && (
                                                <a href={project.repo_link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                                                    <FaGithub/> Repository</a>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Projects;