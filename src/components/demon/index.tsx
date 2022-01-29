import React from 'react'
import { DOUBLE_TILE_SIZE, TILE_SIZE } from 'settings/constantes';
import './index.css'

const Demon = () =>{



    return (
        <div 
            style={{
                position: 'absolute',
                width: DOUBLE_TILE_SIZE,
                bottom: TILE_SIZE*3,
                left: TILE_SIZE,
                height: DOUBLE_TILE_SIZE,
                backgroundImage:"url(./assets/DEMON.png)",
                backgroundRepeat:'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite'
            }}    
        />
    )

};

export default Demon