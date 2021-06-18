import React from 'react';
import './style.css';

const Company = (props) => {

    const isMilestone = Object.entries(props.milestone).length > 0;
    console.log("isMilestone?", isMilestone);

    const getMilestoneResponsibilities = (roles) => {
        let roleArr = roles.map( (role, ind) =>
            <ul key={ind}>
                <li>{role}</li>
            </ul>
        )
        return roleArr;
    }

    return (
        <div className="company-info">
            <div className="company-logo">
                <img src={props.logo} />
            </div>
            <div className="details-section">
                <div className="title">{props.title}</div>
                <div>{props.subtitle}</div>
                <div>{props.companyName}</div>
                <div className="roles">Roles and Responsibilities</div>
                {props.roles}
                {isMilestone &&
                    <>
                        <div className="title">{props.milestone.title}</div>
                        <div>{props.milestone.heading}</div>
                        <div className="roles">Roles and Responsibilities</div>
                        {getMilestoneResponsibilities(props.milestone.roles)}
                    </>
                }
            </div>
        </div>
    );
}

export default Company;
