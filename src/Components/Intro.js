import React from 'react'
import linkedin from '../Images/Linkedin.png'
import email from '../Images/email.png'

export default function Intro(){
    return(
        <div className='Intro'>
            <h1>Yashas Kamath</h1>
            <h3>Frontend Developer</h3>
            <h4>yashaskamath.website</h4>
            <div className='buttons'>
                <button className='mail'>
                    <img src={email} className='epic'/>
                    Email
                </button>
                <button className='linkedin'>
                    <img src={linkedin} className='lpic'/>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}