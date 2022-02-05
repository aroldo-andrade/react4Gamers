import { IGameObject } from 'interfaces';
import React from 'react'
import { TILE_SIZE } from 'settings/constantes';
import './index.css'

const Chest = (props:IGameObject) =>{

    const {initialPosition:{x, y}} = props

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
                animation: 'chest-animation 1s steps(3) infinite',
            }}    
        />
    )

};

export default Chest