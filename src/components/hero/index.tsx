
import React from 'react'
import { HEAD_OFFSET, HERO_INITIAL_POSITION, HERO_Z_INDEX, TILE_SIZE, TILE_SIZE_OFFSET } from 'settings/constantes';
import { useHeroMoviment } from '../../hooks/useHeroMoviment';
import './index.css'



const Hero = () => {

    const { x, y, hDirection, vDirection } = useHeroMoviment(HERO_INITIAL_POSITION)


    return (
        <div
            style={{
                position: 'absolute',
                width: TILE_SIZE,
                left: TILE_SIZE * x,
                bottom: TILE_SIZE * y,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'hero-animation 1s steps(4) infinite',
                backgroundPosition: `0 -${TILE_SIZE - TILE_SIZE_OFFSET}px`,
                transform: `scaleX(${hDirection}) rotate(${vDirection}deg)`,
                zIndex: HERO_Z_INDEX
            }}
        />
    )

};

export default Hero