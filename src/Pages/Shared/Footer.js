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

            <footer class="footer p-20 bg-white text-white-content">
                <div>
                    <span class="footer-title">Services</span>
                    <Link to='/' class="link link-hover">Branding</Link>
                    <Link to='/' class="link link-hover">Design</Link>
                    <Link to='/' class="link link-hover">Marketing</Link>
                    <Link to='/' class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to='/' class="link link-hover">About us</Link>
                    <Link to='/' class="link link-hover">Contact</Link>
                    <Link to='/' class="link link-hover">Jobs</Link>
                    <Link to='/' class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <Link to='/' class="link link-hover">Terms of use</Link>
                    <Link to='/' class="link link-hover">Privacy policy</Link>
                    <Link to='/' class="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <footer class="footer footer-center p-4">
                <div>
                    <p>Copyright © 2022 - All right reserved by Suronjit pal</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;