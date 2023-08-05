import React from 'react'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

import './Contect.css'
import '../../index.css'

const Contect = () => {
    return (
        <section className='c-wrapper'>
            <div className="c-container flexCenter innerWidth paddings">
                {/* c-left */}
                <div className="c-left flexColStart">
                    <span className='orangeText'>Contect Us</span>
                    <span className='primaryText'>Ease to contect</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit,
                        adipisicing elit. Dignissimos, reiciendis modi? <br />
                        Nam quidem dignissimos aliquam incidunt odio delectus,
                        .
                    </span>
                    <div className="flexColStart contactModes">
                    {/* First row */}
                        <div className="flexStart row">
                        {/* 1 */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="detail flexColStart">
                                        <span className='primaryText'>Call</span><span className='secondaryText'>03215302092</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>
                            {/* 2 */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="detail flexColStart">
                                        <span className='primaryText'>Chat</span><span className='secondaryText'>03215302092</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>
                        {/* second row */}
                        <div className="flexStart row">
                        {/* 3 */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="detail flexColStart">
                                        <span className='primaryText'>Video Call</span><span className='secondaryText'>03215302092</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>
                            {/* 2 */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="detail flexColStart">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>03215302092</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* c-write */}
                <div className="c-right flexCenter">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contect