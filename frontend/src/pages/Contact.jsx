import React from "react";
import { useState, useEffect } from "react";
import { Container, Card } from 'react-bootstrap';
import "../assets/css/Contact.css";
import API_BASE_URL from "../config";

const Contact = () => {
    useEffect(()=>{
        document.title = "Contact | Ajay Maddineni";
    },[]);
    
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}api/contact`)
            .then(res => res.json())
            .then(data => setContact(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p className='pt-5 mt-5 text-center text-light'>Loading Contact Information...</p>;
    }
    return (
        <div className='page'>
        <section className='mt-5 pt-5'>
                <Container style={{ maxWidth: "600px" }}>
                    <h2 className='mb-4 text-center contact-title'>Contact Me</h2>
                    <Card className='shadow-sm contact-card'>
                        <Card.Body>
                            <p><strong>Name:</strong> {contact.name}</p>
                            <p><strong>Email:</strong> <a href={`mailto:${contact.mail}`}>{contact.mail}</a></p>
                            <p><strong>Phone:</strong> {contact.mobile}</p>
                            <p><strong>LinkedIn:</strong> <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a></p>
                            <p><strong>GitHub:</strong> <a href={contact.github} target="_blank" rel="noopener noreferrer">{contact.github}</a></p>
                            <p><strong>Address:</strong> {contact.Address}</p>
                            <a href="/Ajay_ASE_Resume.pdf" download className="btn btn-primary d-flex justify-content-center">Download Resume</a>
                        </Card.Body>
                    </Card>
                </Container>
        </section>
        </div>
    );
}

export default Contact; 