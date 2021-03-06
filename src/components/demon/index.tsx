import React from 'react'
import { useEnemyMoviment } from 'hooks/useEnemyMoviment';
import { IEnemyProps } from 'interfaces';
import { DOUBLE_TILE_SIZE, DOUBLE_TILE_SIZE_OFFSET, ENEMY_Z_INDEX, TILE_SIZE } from 'settings/constantes';
import './index.css'

const Demon = (props: IEnemyProps) => {

    const { x, y, h, v } = useEnemyMoviment(props.initialPosition)

    return (
        <div
            style={{
                position: 'absolute',
                width: DOUBLE_TILE_SIZE,
                left: TILE_SIZE * x,
                top: ((TILE_SIZE * y)-TILE_SIZE)-DOUBLE_TILE_SIZE_OFFSET,
                height: DOUBLE_TILE_SIZE,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite',
                backgroundPosition: `0 -${DOUBLE_TILE_SIZE_OFFSET}px`,
                transform: `scaleX(${h}) rotate(${v}deg)`,
                zIndex: ENEMY_Z_INDEX
            }}
        />
    )

};

export default Demon