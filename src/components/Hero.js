import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <h1 className='hero-h1-tag'>Journey awaits</h1>
            <p>Get ready to party</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Start Devouring</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer<i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default Hero
