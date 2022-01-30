import { useEnemyMoviment } from 'hooks/useEnemyMoviment';
import { HDirection, VDirection } from 'interfaces';
import React from 'react'
import { DOUBLE_TILE_SIZE, DOUBLE_TILE_SIZE_OFFSET, ENEMY_Z_INDEX, TILE_SIZE } from 'settings/constantes';
import './index.css'

const Demon = () => {

    const { x, y, hDirection, vDirection } = useEnemyMoviment({ x: 5, y: 5, v:VDirection.DEFAULT, h:HDirection.RIGHT })

    return (
        <div
            style={{
                position: 'absolute',
                width: DOUBLE_TILE_SIZE,
                left: TILE_SIZE * x,
                bottom: TILE_SIZE * y,
                height: DOUBLE_TILE_SIZE,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite',
                backgroundPosition: `0 -${DOUBLE_TILE_SIZE_OFFSET}px`,
                transform: `scaleX(${hDirection}) rotate(${vDirection}deg)`,
                zIndex: ENEMY_Z_INDEX
            }}
        />
    )

};

export default Demon