import React from 'react'
import Intro from './Intro'
import About from './About'
import Interests from './Interests'

export default function Body(){
    return(
        <div className='body'>
            <Intro/>
            <About/>
            <Interests/>
        </div>
    )
}