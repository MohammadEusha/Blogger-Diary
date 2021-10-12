import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const ourAddress = [
        { name: "Khulna, Bangladesh" },
        { name: "Doulotpur" },

    ]
    const Blogs = [
        { name: "Vintage Tech Name" },
        { name: "Vintage Tech Content" },
        { name: "Vintage Tech Content Link" },
    ]
    return (
        <footer id="contact" className="footer-area clear-both mt-5 h6">
            <div className="container pt-5 pb-3">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="d-flex ">
                            <h1 className="text-light display-3">Retro Tech Diary</h1>
                        </div>
                        <h4 className="text-light ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio velit dignissimos quidem ipsa voluptatum numquam quis cupiditate quo, natus, illum laudantium? Esse eos, facilis tempore temporibus laboriosam odit asperiores?</h4>
                    </div>
                    <FooterCol key={1} menuTitle="Services" menuItems={Blogs} />
                    <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 text-white">
                            <h4>Call now</h4>
                            <button className="btn btn-brand btn-lg btn-light text-secondary">+565465164164</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-light">
                    <p>Copyright <span className="text-danger"> {(new Date()).getFullYear()}</span> All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;