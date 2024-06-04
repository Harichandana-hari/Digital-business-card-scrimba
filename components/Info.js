import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Info() {
    return (
        <div className="info">
            <img className="info-img" src= "../images/hari.jpg" />
            <h1 className="info-name">Harichandana M</h1>
            <h3 className="info-occupation">Frontend Developer</h3>
            <a className="info-link">harichandana.com</a>
            <div className="info-buttons">
                <address>
                    <a href="mharichandanam@gmail.com" target="_blank">
                        <button className="button button-email">
                        <FontAwesomeIcon icon={faEnvelope} className="info-icon"/> 
                        Email
                    </button></a>
                    <a href="https://www.linkedin.com/in/harichandana-m/" target="_blank">
                    <button className="button button-linkedin">
                        <FontAwesomeIcon icon={faLinkedin} className="info-icon"/>
                        Linked-In
                    </button></a>
                </address>
            </div>
        </div>
    );
}