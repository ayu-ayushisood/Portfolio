import React from 'react';
import './style.css';
import Img from '../../assets/images/ayushi.png'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

const Landing = () => {
    return (
        <>
            <div className="top-container">
                <div className="header-nav">
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="reverse-row-nav" >
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link to="/experience">Experience</Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link to="/skills">Skills</Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Link to="/work">Work</Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>Download Resume</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                </div>
                <div className="top-section">

                    <div className="top-subsection">
                        <div className="name-container">
                            <h1 className="name">AYUSHI SOOD</h1>
                        </div>
                        <div className="headline">
                            <h2>Frontend Developer | Mobile app Developer <br />{`</>`}</h2>
                        </div>
                    </div>
                    {/* <div className="code-symbol">
                        <h2>{`</>`}</h2>
                    </div> */}
                </div>
            </div>
            <div className="bottom-section">
                <div className="image-container">
                    <img src={Img} className="profile-pic" alt="Profile Picture" />
                </div>
                <div className="about-container">
                    <p>Creative Frontend Developer with over 3 years of experience using JavaScript and its frameworks and libraries to build all aspects of the user experience and user interface for client ready products. Specializes in ReactJs and Redux to build well integrated web apps.</p>
                </div>
                <div className="triangle-container"><div className='triangle-topright'></div></div>

            </div>
        </>
    );
}

export default Landing;