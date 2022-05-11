import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Shared.css'

const Header = () => {

    const menuItems = (
        <>
            <li><NavLink className='mx-1' to='/'>Home</NavLink></li>
            <li><NavLink className='mx-1' to='/about'>About</NavLink></li>
            <li><NavLink className='mx-1' to='/appointment'>Appointment</NavLink></li>
            <li><NavLink className='mx-1' to='/review'>Review</NavLink></li>
            <li><NavLink className='mx-1' to='/contact'>Contact Us</NavLink></li>
            <li><NavLink className='mx-1' to='/login'>Login</NavLink></li>
        </>
    )


    return (
        <div className="navbar bg-base-100 px-14">
            <Link to='/' className="normal-case mr-auto text-xl"> Doctors Postal </Link>
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
                    {menuItems}
                </ul>
            </div>


            <ul className="menu menu-horizontal hidden lg:flex p-0">
                {menuItems}
            </ul>


        </div>
    );
};

export default Header;