import React, { useState } from 'react'
import "./faq.css";
import { FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const accordionData = [
        {
          question: "What is Akasha?",
          answer:
            "Akasha is a layer zero blockchain technology that connects all blockchains together, allowing them to communicate and share data seamlessly. It acts as the foundation for a fully connected blockchain ecosystem.",
        },
        {
          question: "What makes Akasha different from other blockchains?",
          answer: "Akasha is designed to be interoperable with multiple blockchains, ensuring seamless communication across networks.",
        },
        {
          question: "How does Akasha help first-time crypto users?",
          answer: "Akasha provides user-friendly tools and documentation to help newcomers easily navigate the blockchain ecosystem.",
        },
        {
          question: "Is Akasha secure?",
          answer: "Yes, Akasha uses advanced cryptographic security mechanisms to ensure the safety and privacy of user data.",
        },
        {
          question: "Is Akasha decentralized?",
          answer: "Akasha operates on a decentralized network with no single point of control, making it resilient and transparent.",
        },
        {
          question: "How can I get involved in the Akasha community?",
          answer: "You can join the Akasha community by participating in discussions, contributing to development, and following Akasha’s official channels.",
        },
      ];
      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    return (
        <div className='faq-sec'>
            <div className='faq-head'>
                <div className='faq-head-text'>Frequently Asked Questions</div></div>

                <div className='faq-accordion'>
                <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${openIndex === index ? "open" : ""}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="accordion-header">
            <div>{item.question}</div>
            {openIndex === index ? 
            <IconContext.Provider value={{ color: "#000", className: "global-class-name" }}>
            <div>
            <FaChevronUp />
            </div>
          </IconContext.Provider> :
          <IconContext.Provider value={{ color: "#000", className: "global-class-name" }}>
          <div>
          <FaChevronDown />
          </div>
        </IconContext.Provider>
        
        }
            {/* <span className="icon">{openIndex === index ? "▲" : "▼"}</span> */}
          </div>
          {openIndex === index && <div className="accordion-content">{item.answer}</div>}
        </div>
      ))}
    </div>
                </div>
        </div>
    )
}

export default FAQSection;
