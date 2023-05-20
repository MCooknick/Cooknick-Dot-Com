import React from 'react';

const ProjectInfo = ({ title, technicalDetails, link }) => (
    <div className="info-container">
        <div className="info-inner info-title-container">
            <div>
                <p className="app-title">
                    {title}
                    {link ?
                        <a target="_blank" href={link}>Visit</a>
                        : null}
                </p>
            </div>
            <div className="x-mark-container" >
                <span>
                    <img alt="close" src="./assets/img/x-mark-black.png" className="x-mark" width="20" height="20" />
                </span>
            </div>
        </div>
        <hr />
        <div className="info-inner">
            <p className="tech-details hide-mobile">Techincal Details</p>
            <ul>
                {technicalDetails.map(detail => (<li>{detail}</li>))}
            </ul>
        </div>
    </div>
)

export default ProjectInfo;