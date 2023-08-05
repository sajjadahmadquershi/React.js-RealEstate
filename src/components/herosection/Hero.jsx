import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import { animate, motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className="paddings flexCenter innerWidth hero-container">
                {/* Left side */}
                <div className="hero-left flexColStart">
                    <div className="hero-title">
                        <div className="orange-cicle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, type: "spring" }}
                        >
                            Discover <br /> Most Suitable <br /> Property
                        </motion.h1>

                    </div>
                    <div className="hero-des flexColStart">
                        <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum?</span>
                        <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.</span>
                    </div>
                    <div className="search-bar flexCenter">
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    <div className="stats flexCenter">
                        <div className="stat flexColCenter">
                            <span><CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Product</span>
                        </div>
                        <div className="stat flexColCenter">
                            <span><CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Heapy Customers</span>
                        </div>
                        <div className="stat flexColCenter">
                            <span><CountUp end={8} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Aeard Winigs</span>
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="hero-right flexCenter">
                    <motion.div className="image-container"
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "spring" }}
                    >
                        <img src="./hero-image.png" alt="hero image" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero