import React from 'react'
import "./navbar.css"
import LogoImage from "../../assets/Akasha Logo_White.svg"



const Navbar = () => {
    return (
        <div className='navbar-sec'>
            <div className='navbar-flex'>
                <img src={ LogoImage} alt="" className='navbar-logo' />
                <button className='navbar-cta'>Use Akasha</button>
            </div>
        </div>
    )
}

export default Navbar;
