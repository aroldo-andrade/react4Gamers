import React from 'react'
import { HEAD_OFFSET, TILE_SIZE, TILE_SIZE_OFFSET } from 'settings/constantes';
import './index.css'

const MiniDemon = () =>{



    return (
        <div 
            style={{
                position: 'absolute',
                width: TILE_SIZE,
                bottom: TILE_SIZE*3,
                left: TILE_SIZE*3,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage:"url(./assets/MINI-DEMON.png)",
                backgroundRepeat:'no-repeat',
                animation: 'mini-demon-animation 1s steps(4) infinite',
                backgroundPosition: `0 -${TILE_SIZE - TILE_SIZE_OFFSET}px`
            }}    
        />
    )

};

export default MiniDemon