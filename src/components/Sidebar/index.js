import React from 'react';
import './style.css'
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/videos/logo.gif';
import { LogoGithub, LogoLinkedin, Mail, LogoBehance, LogoInstagram } from 'react-ionicons'
import * as CONSTANTS from '../../constants';

const Sidebar = () => {
    return (
        <div className="sidebar">

            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="reverse-row-nav" >

                    <Nav className="flex-column">
                        <Nav.Item>
                            <div className="flex-container">
                                <Link to="/" className="to-home">
                                    <img src={logo} className="logo" />
                                </Link>
                                <div className="separator" />
                            </div>
                        </Nav.Item>
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
                        <Nav.Item>
                            <div className="social-icons">
                                <a href={CONSTANTS.GITHUB_LINK} rel="noreferrer" target="_blank">
                                    <LogoGithub className="icons-style" />
                                </a>
                                <a href={CONSTANTS.LINKEDIN_LINK} rel="noreferrer" target="_blank">
                                    <LogoLinkedin className="icons-style" />
                                </a>
                                <a href={CONSTANTS.MAIL_TO} rel="noreferrer">
                                    <Mail className="icons-style" />
                                </a>
                                <a href={CONSTANTS.INSTAGRAM_LINK} rel="noreferrer" target="_blank">
                                    <LogoInstagram className="icons-style" />
                                </a>
                                <a href={CONSTANTS.BEHANCE_LINK} rel="noreferrer" target="_blank">
                                    <LogoBehance className="icons-style" />
                                </a>
                            </div>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        </div>
    );
}

export default Sidebar;
