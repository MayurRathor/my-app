import React from 'react'
import './about.css'
import dev from '../../img/dev.svg'
function About() {
    return (
        <div className='a-wrapper'>
            <div className='a-left'>
                <img src={dev} alt='' className='a-image' />
            </div>

            <div className='a-right'>
                <div className='a-right-wrapper'>
                    <h2 className='a-heading'>About Us</h2>
                    <p>Honestly, ever since the e-commerce app, i feel 110% comfortable working on react, redux and all.. it got me thinking to start building mobiles too with react-native... i really would love to see you build react native apps too...don't know why it feels so good waiting and learning with you...</p>
                </div>
            </div>
        </div>
    )
}

export default About;