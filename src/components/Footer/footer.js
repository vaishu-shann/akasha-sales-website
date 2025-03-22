import React from 'react'
import "./footer.css"
import WhiteLogo from "../../assets/Akasha Logo.png"
import RightArrow from "../../assets/right-arrow.png"

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-width'>
            <div className='copyrights'>2025 Akasha. All rights reserved.</div>
            <img src={WhiteLogo} alt="" className='footer-logo' />
            <div className='newsletter'>
                <div className='newsletter-head'>Subscribe to Our Newsletter</div>
                <div className='newsletter-desc'>for the latest Akasha updates.</div>
                <div className='newsletter-input'>
                    <input placeholder='Enter email' className='footer-input'/>
                    <img src={RightArrow} alt='' className='footer-arrow' />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
