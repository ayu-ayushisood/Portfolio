import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar'
import Heading from '../../components/Header'
const Skills = () => {
    return (
        <div className="skills">
            <Sidebar />
            <div className="right-section">
                <Heading 
                    name = 'Skills'
                />
            </div>
        </div>
    );
}

export default Skills;
