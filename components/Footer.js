import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faTwitterSquare} className="footer-icon"/>
            <FontAwesomeIcon icon={faFacebookSquare} className="footer-icon" />
            <a href="https://www.instagram.com/h.x.r.i._/" target="_blank">
            <FontAwesomeIcon icon={faInstagramSquare} className="footer-icon" /></a>
            <a href="https://github.com/Harichandana-hari" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" /></a>
        </div>
    );
}