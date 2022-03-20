import React from 'react'
import './intro.css'
import me from '../../img/profile3.svg';
function Intro() {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h3 className='i-intro'> Hello, My Name is </h3>
                    <h1 className='i-name'> Mayur Rathor </h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>UX/UI Designer</div>
                            <div className='i-title-item'>Mobile App Developer</div>
                            <div className='i-title-item'>MERN stack Developer</div>
                            <div className='i-title-item'>Content Creator</div>
                        </div>
                    </div>
                    <div className='i-desc'>
                        Interested to work in front-end technologies and want to be a full-stack developer one day. From Odisha, Berhampur who love programming, developing, learning and problem solving.
                    </div>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={me} alt='' className='i-image' />

            </div>
        </div>
    )
}

export default Intro;