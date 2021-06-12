import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <div className="header">
            {props.name}
        </div>
    );
}

export default Header;
