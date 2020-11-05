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
                    Passionate, responsible, and committed Developer, with a get-it-done, on-time spirit with experience designing, implementing and adapting technically sophisticated online web applications using Html, CSS, Javascript, React, Python, and more.  I love multiplayer video games, riding BMX, skateboarding, or hanging out with my family and friends.
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