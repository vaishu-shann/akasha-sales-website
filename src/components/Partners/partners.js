import React from 'react'
import "./partners.css"
import Partner1 from "../../assets/partner1.png"
import Partner2 from "../../assets/partner2.png"
import Partner3 from "../../assets/partner3.png"
import Partner4 from "../../assets/partner4.png"
import Partner5 from "../../assets/partner5.png"


const Partners = () => {
  return (
    <div className='partner-section'>
      <div className='partner-head'>
      PARTNERS:
      </div>
      <div className='partner-list'>
        <img src={Partner1} className='partner-img' alt=''/>
        <img src={Partner2} className='partner-img' alt=''/>
        <img src={Partner3} className='partner-img' alt=''/>
        <img src={Partner4} className='partner-img' alt=''/>
        <img src={Partner5} className='partner-img' alt=''/>
      </div>
    </div>
  )
}

export default Partners
