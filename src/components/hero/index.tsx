
import { IHeroProps } from 'interfaces';
import React from 'react'
import { HEAD_HEIGHT_OFFSET, HERO_Z_INDEX, TILE_SIZE, TILE_SIZE_OFFSET } from 'settings/constantes';
import { useHeroMoviment } from '../../hooks/useHeroMoviment';
import './index.css'



const Hero = (props:IHeroProps) => {

    const { x, y, h, v } = useHeroMoviment(props.initialPosition)

    return (
        <div
            style={{
                position: 'absolute',
                width: TILE_SIZE,
                left: TILE_SIZE * x,
                top: (TILE_SIZE * y)-HEAD_HEIGHT_OFFSET,
                height: TILE_SIZE+HEAD_HEIGHT_OFFSET,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'hero-animation 1s steps(4) infinite',
                backgroundPosition: `0 -${TILE_SIZE-TILE_SIZE_OFFSET}px`,
                transform: `scaleX(${h}) rotate(${v}deg)`,
                zIndex: HERO_Z_INDEX
            }}
        />
    )

};

export default Hero