import React from 'react'
import './Footer.scss'

import {
    FaFacebookF,
    FaGlobe,
    FaTwitter,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import {ContentWrapper} from "../../../index.js"



const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                {/* <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div> */}
                <div className="socialIcons">

              
                    <span className="icon" >
                        <FaGlobe />
                    </span>

                  <a 
                  href='https://github.com/princegangle'
                  target='blank'
                  rel='noreferrer'
                  >
                    <span className="icon" >
                        <FaGithub/>
                    </span>

                  </a>


                    <a href='https://twitter.com/princegangale'
                    target='blank'
                    rel='noreferrer'>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    </a>
                    
                    <a 
                    href='https://www.linkedin.com/in/prince-gangle-228023196/'
                    target='blank'
                    rel='noreferrer'>
                        
                    <span className="icon">
                        <FaLinkedin />
                    </span>

                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
