import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar'
import Heading from '../../components/Header'

const Experience = () => {
    return (
        <div className="experience">
           <Sidebar />
            <div className="right-section">
                <Heading 
                    name = 'Professional Experience'
                />
            </div>
        </div>
    );
}

export default Experience;
