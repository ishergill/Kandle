import React from 'react'
import './GamesCard.css'
import Image from 'next/image'
function GamesCard({ head, bgcolor, cardImg, title, description, btn }) {
    return (
        <div className='card-hero-wrapper'>
            <div className={`card-hero-section ${bgcolor}`}>
                <div className='card-hero-section-left'>
                    <div>
                        {head}
                    </div>
                </div>
                <div className='card-hero-section-right'>
                    <Image className='card-hero-section-img' src={cardImg} alt='card-img' />
                </div>
            </div>
            <div className='card-title'>
                {title}
            </div>
            <div className='card-description'>
                {description}
            </div>
            <div className={`card-btn  ${head === 'COIN LEAGUE' ? 'green-btn' : 'normal-btn'}`}>
                {btn}
            </div>
        </div>
    )
}

export default GamesCard