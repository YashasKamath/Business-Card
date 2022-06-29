import React from 'react'
import git from '../Images/GitHub.png'
import insta from '../Images/Instagram.jpg'
import fb from '../Images/Facebook.png'
import twitter from '../Images/Twitter.jpg'

export default function Footer(){
    return (
        <footer className='footer'>
            <img src={git}/>
            <img src={insta}/>
            <img src={fb}/>
            <img src={twitter}/>
        </footer>
    )
}