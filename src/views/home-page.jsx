import React from 'react'
import { Link } from 'react-router-dom'

import CoverPhoto from '../assets/img/home-page-cover.avif'

export function HomePage() {
    return (
        <div className='home-page'>
            <div
                className="cover-photo"
                style={{ background: `url(${CoverPhoto}) center center / cover` }}
            ></div>
            <h1>Welcome to Movies App!</h1>
            <h2>Looking for a good movie to watch with your beloved ones?</h2>
            <button><Link to='/movie'>Click me!</Link></button>
        </div>
    )
}
