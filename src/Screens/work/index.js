import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar'
import Heading from '../../components/Header'

const Work = () => {
    return (
        <div className="secondary-screens-container">
            <Sidebar />
            <div className="right-section">
                <Heading 
                    name = 'Work'
                />
            </div>
        </div>
    );
}

export default Work;
