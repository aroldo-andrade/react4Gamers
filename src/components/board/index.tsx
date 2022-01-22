import React from 'react'
import { GAME_SIZE } from 'settings/constantes'
import Hero from '../hero'


const Board = () =>{

    return (
        <div>
            <Hero/>
            <img 
                src="./assets/tileset.gif" 
                alt="background" 
                width={GAME_SIZE}
                height={GAME_SIZE}
                />
        </div>
    )
}

export default Board