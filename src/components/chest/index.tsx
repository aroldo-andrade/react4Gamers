import { ChestsContext } from 'context/chets';
import { IGameObject } from 'interfaces';
import React, { useContext } from 'react'
import { TILE_SIZE } from 'settings/constantes';
import './index.css'

const Chest = (props:IGameObject) =>{

    const {initialPosition:{x, y}} = props

    const chestsContext = useContext(ChestsContext)
    const shouldAnimate = chestsContext.opennedChests.positions.find(f => f.x === x && f.y === y)

    return (
        <div 
            style={{
                position: 'absolute',
                top: TILE_SIZE * y,
                left: TILE_SIZE * x,
                width: TILE_SIZE,
                height: TILE_SIZE,
                backgroundImage:"url(./assets/CHEST.png)",
                backgroundRepeat:'no-repeat',
                animation: shouldAnimate ? 'chest-animation 1s steps(2, end) forwards' : '',
            }}    
        />
    )

};

export default Chest