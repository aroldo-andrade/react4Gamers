import Chest from 'components/chest'
import Demon from 'components/demon'
import MiniDemon from 'components/miniDemon'
import Trap from 'components/trap'
import React from 'react'
import { GAME_SIZE } from 'settings/constantes'
import Hero from '../hero'


const Board = () =>{

    return (
        <div>
            <MiniDemon/>
            <Demon/>
            <Chest/>
            <Trap/>
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