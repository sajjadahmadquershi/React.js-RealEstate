import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from "react-icons/md";
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
    const [ClassName, setClassName] = useState(null)
    return (
        <section className='v-wrapper'>
            <div className="paddings innerWidth flexCenter v-container">
                {/* let */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                {/* right */}
                <div className="v-right flexColStart">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value we give to you</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Deserunt tempora maxime quas sed? Dignissimos, commodi.
                    </span>
                    <Accordion className='accordian'  preExpanded={[0]} allowMultipleExpanded={false} >
                    {
                        data.map((data,i)=>{
                            return(
                                <AccordionItem key={i} className={`AccordionItem ${ClassName}`} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordianbtn flexCenter'>
                                        <AccordionItemState>
                                            {({expended})=>expended ? setClassName('collapsed') : setClassName('expended ')}
                                        </AccordionItemState>
                                            <div className="icon flexCenter">{data.icon}</div>
                                            <span className='primaryText'>{data.heading}</span>
                                            <div className="icon flexCenter">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='secondaryText'>{data.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                    </Accordion>

                </div>
            </div>
        </section>
    )
}

export default Value