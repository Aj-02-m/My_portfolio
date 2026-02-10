import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ profile }) => {
    useEffect(()=>{
        document.title = "Ajay Maddineni | Software Engineer";
    },[]);

    if (!profile) return null;
    return (
        <div className="page">
            <section className="home-section mt-5 pt-5">
                <Container>
                    <Row className="align-items-center min-vh-100">
                        {/*Left side text*/}
                        <Col md={6} className="text-center text-md-start">
                            <div className='glass-card'>
                                <h1 className="fw-bold">Hi, I'm {profile.name}</h1>
                                <h4 className=" mt-2">{profile.role}</h4>
                                <p className="mt-4 ">{profile.about}</p>
                                <div className='mt-4 hero-btns'>
                                    <a variant="primary" href="/Ajay_ASE_Resume.pdf"  download className='btn btn-primary hero-btn me-3'>Download Resume</a>
                                    <Link className= "btn btn-primary hero-btn" to="/projects">View Projects</Link>
                                </div>
                            </div>
                        </Col>

                        {/*Right side image*/}
                        <Col md={6} className="text-center mt-4 mt-md-0">
                            <img src={`https://ajay-portfolio-atop.onrender.com/${profile.image_url}`} alt={profile.name} className="home-profile-img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    );
};

export default Home;