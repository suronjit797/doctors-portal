import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/footer.png'


const Footer = () => {

    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }



    return (
        <div className="" style={bgStyle}>

            <footer className="footer p-20 bg-white text-white-content">
                <div className='mx-auto'>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer footer-center p-4">
                <div className='mx-auto'>
                    <p>Copyright © 2022 - All right reserved by Suronjit pal</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;