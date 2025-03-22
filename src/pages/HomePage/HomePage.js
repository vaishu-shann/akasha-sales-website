import React from 'react'
import "./homePage.css"
import Navbar from '../../components/Navbar/navbar'
import BannerScreen from '../../components/BannerScreen/bannerScreen'
import Partners from '../../components/Partners/partners'
import IncomeCalculator from '../../components/IncomeCalculator/incomeCalculator'
import WalletSteps from '../../components/WalletSteps/walletSteps'
import FAQSection from '../../components/FAQ/faq'
import Footer from '../../components/Footer/footer'

const HomePage = () => {
  return (
    <div className='home-page'>
      <Navbar/>
      <BannerScreen/>
      <Partners/>
      <IncomeCalculator/>
      <WalletSteps/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
