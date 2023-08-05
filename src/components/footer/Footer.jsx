import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className='f-wapper'>
            <div className="paddings innerWidth flexCenter f-container">
                {/* left */}
                <div className="f-left flexColStart">
                    <img src="./logo2.png" alt="logo" width={120} />
                    <span className='secondaryText'>Lorem ipsum dolor, sit amet consectetur
                        <br />
                        adipisicing elit. Odit, rerum.</span>
                </div>
                {/* right */}
                <div className="f-right flexColStart">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>tahh gujarkhsn disrawalpindi</span>
                    <div className="f-menu flexCenter">
                        <a href="#">Residencies</a>
                        <a href="#">Our Value</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer