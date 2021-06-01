import React from 'react';
import './style.css';
import Img from '../../assets/images/ayushi.png'

const Landing = () => {
    return (
        <div className="home">
            
            <div className="top-section">
                <div className="name-container">
                    <h1 className="name">AYUSHI SOOD</h1>
                </div>
                <div className="headline">
                    <h2>Frontend Developer | Mobile app Developer</h2>
                </div>
                <div className="code-symbol">
                    <h2>{`</>`}</h2>
                </div>
                <div className="image-container">
                    <img src={Img} className="profile-pic" alt="Profile Picture" />
                </div>
            </div>
            <div className="bottom-section">
                <div className="about-container">
                    <p>Creative Frontend Developer with over 3 years of experience using JavaScript and its frameworks and libraries to build all aspects of the user experience and user interface for client ready products. Specializes in ReactJs and Redux to build well integrated web apps.</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;