import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.name}</h1>
        </div>
    );
}

export default Header;
