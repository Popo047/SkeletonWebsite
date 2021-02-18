import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>
                Check Out The Menu
            </h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <CardItem 
                        src="https://thumbs.dreamstime.com/x/crispy-fried-pork-knuckle-falling-slow-motion-black-background-crispy-food-concept-close-up-crispy-fried-pork-knuckle-185283791.jpg"
                        text="You Dont Need a Silver Fork to Eat Good Food"
                        label="Food"
                        path='/services'/>

                        <CardItem 
                        src="https://ak.picdn.net/shutterstock/videos/1039576256/thumb/9.jpg" 
                        text="You Dont Need a Silver Fork to Eat Good Food"
                        label="Food"
                        path='/services'/>
                        
                        
                    </ul>
                    <ul className='cards-items'>
                        <CardItem 
                        src="https://ak.picdn.net/shutterstock/videos/1039576256/thumb/9.jpg" 
                        text="You Dont Need a Silver Fork to Eat Good Food"
                        label="Food"
                        path='/products'/>

                        <CardItem 
                        src="https://ak.picdn.net/shutterstock/videos/1039576256/thumb/9.jpg" 
                        text="You Dont Need a Silver Fork to Eat Good Food"
                        label="Food"
                        path='/sign-up'/>
                        
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
