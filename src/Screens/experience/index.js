import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Heading from '../../components/Header';
import Company from '../../components/Company';
import experienceData from '../../common/experienceData.json';

const Experience = () => {
    
    const getRoles = (roles) => {
        let roleArr = roles.map( (role, ind) =>
            <ul key={ind}>
                <li>{role}</li>
            </ul>
        )
        return roleArr;
    }

    const experiences = () => {
        let data = experienceData.data.map(company =>
            <Company
                key={company.id}
                logo= {company.logo}
                title= {company.title}
                subtitle= {company.heading}
                companyName= {company.name}
                roles= {getRoles(company.roles)}
                milestone= {company.milestone}
            />
        )
        return data;
    }
    return (
        <div className="secondary-screens-container">
            <Sidebar />
            <div className="right-section">
                <Heading
                    name='Professional Experience'
                />
                {experiences()}
            </div>
        </div>
    );
}

export default Experience;
