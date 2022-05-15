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
                <div className='mx-auto w-full text-center'>
                    <span className="footer-title w-full ">Services</span>
                    <Link to='/' className="link link-hover block w-full">Branding</Link>
                    <Link to='/' className="link link-hover block w-full">Design</Link>
                    <Link to='/' className="link link-hover block w-full">Marketing</Link>
                    <Link to='/' className="link link-hover block w-full">Advertisement</Link>
                </div>
                <div className='mx-auto text-center'>
                    <span className="footer-title w-full">Company</span>
                    <Link to='/' className="link link-hover block w-full">About us</Link>
                    <Link to='/' className="link link-hover block w-full">Contact</Link>
                    <Link to='/' className="link link-hover block w-full">Jobs</Link>
                    <Link to='/' className="link link-hover block w-full">Press kit</Link>
                </div>
                <div className='mx-auto text-center'>
                    <span className="footer-title w-full">Legal</span>
                    <Link to='/' className="link link-hover block w-full">Terms of use</Link>
                    <Link to='/' className="link link-hover block w-full">Privacy policy</Link>
                    <Link to='/' className="link link-hover block w-full">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer footer-center p-4">
                <div className='mx-auto text-center'>
                    <p>Copyright © 2022 - All right reserved by Suronjit pal</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;