import React from 'react';
import './style.css'
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/videos/logo.gif';
import { LogoGithub, LogoLinkedin, Mail, LogoBehance, LogoInstagram } from 'react-ionicons'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="flex-container">
                <Link to="/" className="to-home">
                    <img src={logo} className="logo" />
                </Link>
                <div className="separator" />
            </div>
            <Navbar expand="lg">
                <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink activeClassName="selected" to="/experience">Professional Experience</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink activeClassName="selected" to="/skills">Skills</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink activeClassName="selected" to="/work">My Work</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Download Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <div className="social-icons">
                <a href="https://github.com/ayu-ayushisood" target="_blank">
                    <LogoGithub className="icons-style" />
                </a>
                <a href="https://www.linkedin.com/in/ayushi-sood" target="_blank">
                    <LogoLinkedin className="icons-style" />
                </a>
                <a href="mailto:sood.ayushi30@gmail.com"><Mail className="icons-style"/></a>
                <a href="https://www.instagram.com/ayushi_doodles" target="_blank">
                    <LogoInstagram  className="icons-style" />
                </a>
                <a href="https://www.behance.net/soodayushia2b3" target="_blank">
                    <LogoBehance className="icons-style" />
                </a>
            </div>

        </div>
    );
}

export default Sidebar;
