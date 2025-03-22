import React from 'react'
import { useState } from "react";
import "./footer.css"
import WhiteLogo from "../../assets/Akasha Logo.png"
import RightArrow from "../../assets/right-arrow.png"

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        if (!email) {
          alert("Please enter an email address!");
          return;
        }
      
        try {
          const response = await fetch("https://script.google.com/macros/s/AKfycbz9zb3gcE-DT9NDBZrxx6oGUmT38PvJjwTOWrtuFPa7dmn7x9XmGp-Cy7UCZV-rNL86/exec", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
            mode: "cors", // Allow cross-origin requests
          });
      
          const result = await response.json(); // Parse JSON response
          if (response.ok) {
            alert("Subscribed Successfully!");
            setEmail("");
          } else {
            alert("Error: " + result.message);
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong!");
        }
      };
      
    return (
        <div className='footer-section'>
            <div className='footer-width'>
                <div className='copyrights'>2025 Akasha. All rights reserved.</div>
                <img src={WhiteLogo} alt="" className='footer-logo' />
                <div className='newsletter'>
                    <div className='newsletter-head'>Subscribe to Our Newsletter</div>
                    <div className='newsletter-desc'>for the latest Akasha updates.</div>
                    <div className='newsletter-input'>
                        <input placeholder='Enter email' className='footer-input' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <img src={RightArrow} alt='' className='footer-arrow' onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
