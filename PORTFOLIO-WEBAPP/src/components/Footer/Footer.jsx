import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h2 style={{color: "white"}}> My <span>Portfolio.</span> </h2>
                    <p> I'm a passionate web developer focused on crafting beautiful and performant
                        digital experiences. </p>
                </div>

                <div className="footer-column">
                    <h3> Quick Links </h3>
                    <ul className="footer-links">
                        <li> <a href="#home">Home </a> </li>
                        <li> <a href="#about">About Me </a> </li>
                        <li> <a href="#projects">Projects </a> </li>
                        <li> <a href="#skills">Skills </a> </li>
                        <li> <a href="#contact">Contact Me </a> </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3> Contact </h3>
                    <ul className="footer-contact">
                        <li> <FaEnvelope /> zehabfaisal2003@gmail.com </li>
                        <li> <FaPhoneAlt /> 0333-4051034 </li>
                        <li> <FaMapMarkerAlt /> Lahore, Pakistan</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3> Stay Connected </h3>
                    <p> Follow me on social media: </p>
                    <div className="social-flex">
                        <a href="https://github.com/zehabfaisal" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> </a>
                        <a href="https://www.linkedin.com/in/zehab-faisal-7b4428322" target="_blank" 
                            rel="noopener noreferrer"> <FaLinkedin /> </a>
                        <a href="mailto:zehabfaisal1234@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope /> </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p> &copy; {new Date().getFullYear()} Created by Zehab Faisal | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;