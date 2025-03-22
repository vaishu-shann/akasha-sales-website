import React from 'react'
import "./steps.css"
import One from "../../assets/1.png";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Four from "../../assets/4.png";
import Five from "../../assets/5.png";
import MetaMask from "../../assets/metamask.png";
import Arrow from "../../assets/route-arrow.png";
import Label from "../../assets/c-s-label.png"
import UltronSwap from "../../assets/UltronSwap.png"
import AkashaDash from "../../assets/Akasha-Dash.png"

const WalletSteps = () => {
    return (
        <div className='w-s-sec'>
            <div className='single-sec-ws'>
                <div className='sec-left'>
                    <div className='left-no'>
                        <img src={One} alt="" className='number-w-s' />
                        <div>
                            <div className='name-w-s'>Crypto </div>
                            <div className='sub-name-w-s'>Exchange </div>
                        </div>
                    </div>
                </div>
                <div className='sec-right'>
                    <div className='right-head'>Get a Crypto Exchange Account</div>

                    <div className='w-s-right-card'>
                        <div className='card-number'>1</div>
                        <div className='card-break'></div>
                        <div className='card-desc'>Sign up on a crypto exchange like<span style={{ fontWeight: 700 }}> Binance, Coinbase</span>, or <span style={{ fontWeight: 700 }}>Kraken.</span></div>
                    </div>
                    <div className='w-s-right-card'>
                        <div className='card-number'>2</div>
                        <div className='card-break'></div>
                        <div className='card-desc'>Complete the verification process.</div>
                    </div>
                    <div className='w-s-right-card'>
                        <div className='card-number'>3</div>
                        <div className='card-break'></div>
                        <div className='card-desc'>Fund your account with <span style={{ fontWeight: 700 }}>USDT (Tether).</span></div>
                    </div>
                </div>
            </div>
            <div className='single-sec-ws'>
                <div className='sec-left'>
                    <div className='left-no'>
                        <img src={Two} alt="" className='number-w-s-2' />
                        <div>
                            <div className='name-w-s' style={{ marginLeft: -48 }}>Wallet </div>
                        </div>
                    </div>
                </div>
                <div className='sec-right'>
                    <div className='right-head'>Get a Wallet</div>

                    <div className='w-s-right-card'>
                        <div className='card-number'>1</div>
                        <div className='card-break'></div>
                        <div className='card-desc'>Download <span style={{ fontWeight: 700 }}>MetaMask.</span></div>
                    </div>
                    <div className='w-s-right-card2'>
                        <img src={MetaMask} alt="" className='metamask-img' />
                        <div className='card-desc'>MetaMask</div>
                        <img src={Arrow} alt="" className='arrow-img' />

                    </div>
                    <div className='w-s-right-card'>
                        <div className='card-number'>2</div>
                        <div className='card-break'></div>
                        <div className='card-desc'>Set up your wallet (Write down your seed phrase & keep it safe!).</div>
                    </div>
                </div>
            </div>
            <div className='single-sec-ws'>
                <div className='sec-left'>
                    <div className='left-no'>
                        <img src={Three} alt="" className='number-w-s' />
                        <div style={{ marginLeft: -48 }}>
                            <div className='name-w-s'>Super  </div>
                            <div className='sub-name-w-s'>Node </div>
                        </div>
                    </div>
                </div>
                <div className='sec-right'>
                    <div className='right-head'>Purchase a Super Node</div>

                    <div className='w-s-right-card'>
                        <div className='card-number'>1</div>
                        <div className='card-break'></div>
                        <div className='card-desc'>To purchase a Super Node, <span style={{ fontWeight: 700 }}>consult with the person who shared this opportunity with you</span> for guidance on acquiring your node.</div>
                    </div>

                </div>
            </div>
            <div className='single-sec-ws'>
                <div className='sec-left'>
                    <div className='left-no'>
                        <img src={Four} alt="" className='number-w-s-2' />
                        <div>
                            <div className='name-w-s' style={{ marginLeft: -48 }}>Fund </div>
                        </div>
                    </div>
                </div>
                <div className='sec-right'>
                    <div className='right-head'>Fund Your Super Node</div>

                    <div className='w-s-right-card'>
                        <div className='card-number'>1</div>
                        <div className='card-break'></div>
                        <div className='card-desc'>Purchase <span style={{ fontWeight: 700 }}>ULX or AK1111</span> tokens by swapping USDT on <span style={{ fontWeight: 700, textDecoration: 'underline' }}>UltronSwap</span>. </div>
                    </div>
                    <div className='w-s-right-card2'>
                        <img src={UltronSwap} alt="" className='metamask-img' />
                        <div className='card-desc'>UltronSwap</div>
                        <img src={Arrow} alt="" className='arrow-img' />

                    </div>
                    <div className='label-css'>
                        <img src={Label} alt="" className='coming-soon-label' />
                    </div>
                    <div className='w-s-right-card'>
                        <div className='card-number'>2</div>
                        <div className='card-break'></div>
                        <div className='card-desc'>Log into your <span style={{ fontWeight: 700 }}>Akasha Dashboard,</span> click on <span style={{ fontWeight: 700 }}>Super Nodes,</span> then select <span style={{ fontWeight: 700 }}>Manage.</span></div>
                    </div>
                    <div className='w-s-right-card2'>
                        <img src={AkashaDash} alt="" className='metamask-img' />
                        <div className='card-desc'>Akasha Dashboard</div>
                        <img src={Arrow} alt="" className='arrow-img' />

                    </div>
                    <div className='label-css'>
                        <img src={Label} alt="" className='coming-soon-label' />
                    </div>
                    <div className='w-s-right-card'>
                        <div className='card-number'>3</div>
                        <div className='card-break'></div>
                        <div className='card-desc'>Click on your <span style={{ fontWeight: 700 }}>Super Node,</span> complete the <span style={{ fontWeight: 700 }}>deposit,</span> and ensure you click on <span style={{ fontWeight: 700 }}>"Activate Transaction Mining"</span> to begin earning rewards.</div>
                    </div>
                </div>
            </div>
            <div className='single-sec-ws'>
                <div className='sec-left'>
                    <div className='left-no'>
                        <img src={Five} alt="" className='number-w-s' />
                        <div style={{ marginLeft: -48 }}>
                            <div className='name-w-s'>Earn  </div>
                        </div>
                    </div>
                </div>

                <div className='sec-right'>
                    <div className='right-head'>Start Earning Rewards</div>
                    <div className='label-css'>
                        <img src={Label} alt="" className='coming-soon-label' />
                    </div>
                    <div className='w-s-right-card'>
                        <div className='card-number'>1</div>
                        <div className='card-break'></div>

                        <div className='card-desc'>Your Super Node is now active, and you can start receiving passive rewards!</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WalletSteps
