import React from 'react'
import { TILE_SIZE } from 'settings/constantes';
import './index.css'

const Hero = () =>{



    return (
        <div 
            style={{
                position: 'absolute',
                width: TILE_SIZE,
                height: 100,
                backgroundImage:"url(./assets/HERO.png)",
                backgroundRepeat:'no-repeat',
                animation: 'hero-animation 1s steps(4) infinite'
            }}    
        />
    )

};

export default Hero