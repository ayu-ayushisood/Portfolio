import React from 'react';

import Experience from '../experience'
import Landing from '../landing'
import Work from '../work'
import Skills from '../skills'

import './style.css';

const Home = () => {
    return (
        <div className="home">
            <Landing />
            <Experience />
            <Skills />
            <Work />
        </div>
    );
}

export default Home;
