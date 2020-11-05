import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profilePicture from '../../../static/assets/images/bio/dan_flying.jpg';

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
            className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                <div className="about-content-wrapper">
                    <div className="about-header">
                        SUMMARY
                    </div>
                    <div className='about-text'>
                        Experienced manager with a demonstrated history of working in the retail industry. Currently enrolled with Bottega Tech in the “Full Stack Web Development Program with Python and React/JS”. In my personal time, I enjoy playing video games coding or playing one of the many instruments in my music room.
                    </div>
                        <div className='about-header'>
                            SKILLS
                        </div>
                        <div className='about-text'>
                            <ul>
                                <li>
                                    Html, Css, JavaScript, React, Python, Flask, GitHub, MongoDB, MySQL
                                </li>
                                <li>
                                    Sales, Project Management, Social Media Marketing, Training
                                </li>
                            </ul>                    
                        </div>
                    <div className="about-links-wrapper">
                        <div className="about-link">
                            <div className="icon">
                                <a href="https://www.linkedin.com/in/daniel-floyd-ut/" target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </a>
                            </div>
                            <div className="text">
                                Linkedin
                            </div>
                        </div>
                        <div className="about-link">
                            <div className="icon">
                                <a href="https://drive.google.com/open?id=1ejpfjB4krGy5JU1bTdjZFcFaGuNneWbc" target="_blank">
                                    <FontAwesomeIcon icon='file-download' />
                                </a>
                            </div>
                            <div className="text">
                                Resume
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}