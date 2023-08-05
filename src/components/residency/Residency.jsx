import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "Swiper/css";
import './Residency.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/Common';
import { color } from 'framer-motion';

const Residency = () => {
    return (
        <section className='r-wrapper'>
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choice</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                <Sliderbutton/>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="r-card flexColStart">
                                    <img src={card.image} alt="Home" />
                                    <span className='secondaryText r-price'>
                                        <span style={{color:'orange'}}>$</span><span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residency;

const Sliderbutton = ()=>{
    let a = '>'
    let b = '<'
    const swiper = useSwiper();
    return (
        <div className="r-button flexCenter">
            <button className='first-btn' onClick={()=>swiper.slidePrev()}>{a}</button>
            <button className='sec-btn' onClick={()=>swiper.slideNext()}>{b}</button>
        </div>
    );
};