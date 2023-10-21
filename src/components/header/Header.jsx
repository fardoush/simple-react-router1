import React from 'react';
// import { Link } from 'react-router-dom';
// import  '../header/Header.css';
import './Header.css';
import ActiveLink from '../activeLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            {/* <a href="/" className="">Home</a>
            <a href="/about" className="">About</a>
            <a href="/contact" className="">Contact</a> */}
        </nav>
    );
};

export default Header;