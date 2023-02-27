import React from 'react';
import linkDin from '../assets/soc/linkedin.svg';
import facebook from '../assets/soc/facebook.svg';
import instagram from '../assets/soc/instagram.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <p className="copyright">
                        © 2021 Auto theme by Frontend Tricks
                    </p>
                    <div className="footer__soc">
                        <a href="https://www.linkedin.com/feed/" className="footer__soc-link" target={"_blank"}>
                            <img src={linkDin} alt=""/>
                        </a>
                        <a href="https://www.facebook.com/" className="footer__soc-link" target={"_blank"}>
                            <img src={facebook} alt=""/>
                        </a>
                        <a href="https://www.instagram.com/" className="footer__soc-link" target={"_blank"}>
                            <img src={instagram} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;