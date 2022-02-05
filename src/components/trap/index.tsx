import { IGameObject } from 'interfaces';
import React from 'react'
import { TILE_SIZE } from 'settings/constantes';
import './index.css'

const Trap = (props:IGameObject) =>{

    const {initialPosition:{x, y}} = props

    return (
        <div 
            style={{
                position: 'absolute',
                top: TILE_SIZE * y,
                left: TILE_SIZE * x,
                width: TILE_SIZE,
                height: TILE_SIZE,
                backgroundImage:"url(./assets/TRAP.png)",
                backgroundRepeat:'no-repeat',
                animation: 'trap-animation 1s steps(8) infinite',
            }}    
        />
    )

};

export default Trap