import React from 'react'
import { useEnemyMoviment } from 'hooks/useEnemyMoviment';
import { IEnemyProps } from 'interfaces';
import { ENEMY_Z_INDEX, HEAD_HEIGHT_OFFSET, TILE_SIZE, TILE_SIZE_OFFSET } from 'settings/constantes';
import './index.css'


const MiniDemon = (props: IEnemyProps) => {

    const { x, y, h, v } = useEnemyMoviment(props.initialPosition)

    return (
        <div
            style={{
                position: 'absolute',
                width: TILE_SIZE,
                left: TILE_SIZE * x,
                top: (TILE_SIZE * y)-HEAD_HEIGHT_OFFSET,
                height: TILE_SIZE + HEAD_HEIGHT_OFFSET,
                backgroundImage: "url(./assets/MINI-DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'mini-demon-animation 1s steps(4) infinite',
                backgroundPosition: `0 -${TILE_SIZE - TILE_SIZE_OFFSET}px`,
                transform: `scaleX(${h}) rotate(${v}deg)`,
                zIndex: ENEMY_Z_INDEX
            }}
        />
    )

};

export default MiniDemon