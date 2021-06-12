import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar'
import Heading from '../../components/Header'
const Skills = () => {
    return (
        <div className="secondary-screens-container">
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
