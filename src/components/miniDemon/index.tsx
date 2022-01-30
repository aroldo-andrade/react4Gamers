import { useEnemyMoviment } from 'hooks/useEnemyMoviment';
import { HDirection, VDirection } from 'interfaces';
import React from 'react'
import { ENEMY_Z_INDEX, HEAD_OFFSET, TILE_SIZE, TILE_SIZE_OFFSET } from 'settings/constantes';
import './index.css'

const MiniDemon = () =>{

    const { x, y, hDirection, vDirection } = useEnemyMoviment({ x: 10, y: 5, v:VDirection.DEFAULT, h:HDirection.RIGHT})

    return (
        <div 
            style={{
                position: 'absolute',
                width: TILE_SIZE,
                left: TILE_SIZE * x,
                bottom: TILE_SIZE * y,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage:"url(./assets/MINI-DEMON.png)",
                backgroundRepeat:'no-repeat',
                animation: 'mini-demon-animation 1s steps(4) infinite',
                backgroundPosition: `0 -${TILE_SIZE - TILE_SIZE_OFFSET}px`,
                transform: `scaleX(${hDirection}) rotate(${vDirection}deg)`,
                zIndex: ENEMY_Z_INDEX
            }}    
        />
    )

};

export default MiniDemon