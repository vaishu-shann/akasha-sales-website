import React from 'react'
import "./banner.css"
import BannerMainImg from "../../assets/main-img.png"
import BannerSubImg from "../../assets/sub-img.png"
import ComingSoonImg from "../../assets/coming-soon.png"

const BannerScreen = () => {
    return (
        <div className='banner-section'>
            <div className='banner-container'>
                <div className='banner-head'>
                    Unlock Your Wealth Potential
                </div>
                <div className='banner-sub-head'>Where Innovation Meets Opportunity</div>

                <img src={BannerMainImg} alt="" className='banner-main-img' />

                <div className='banner-sub-images'>
                    <div>
                        <img src={BannerMainImg} alt="" className='banner-sub-img' />
                        <div className='sub-img-desc'>Teaser</div>
                    </div>
                    <div>
                        <img src={BannerSubImg} alt="" className='banner-sub-img' />
                        <div className='sub-img-desc'>Introduction</div>
                    </div>
                    <div>
                        <img src={ComingSoonImg} alt="" className='banner-sub-img' />
                        <div className='sub-img-desc'>Super Node</div>
                    </div>
                    <div>
                        <img src={ComingSoonImg} alt="" className='banner-sub-img' />
                        <div className='sub-img-desc'>Technology</div>
                    </div>
                    <div>
                        <img src={ComingSoonImg} alt="" className='banner-sub-img' />
                        <div className='sub-img-desc'>How to Get Started</div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BannerScreen
