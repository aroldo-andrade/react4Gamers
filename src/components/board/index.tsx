import Chest from 'components/chest'
import Debugger from 'components/debugger'
import Demon from 'components/demon'
import MiniDemon from 'components/miniDemon'
import Trap from 'components/trap'
import React from 'react'
import { GAME_SIZE } from 'settings/constantes'
import Hero from '../hero'


const Board = () =>{

    return (
        <div>
            <MiniDemon initialPosition={{x:1, y:5}}/>
            <MiniDemon initialPosition={{x:2, y:5}}/>
            <Demon initialPosition={{x:5, y:5}}/>
            <Chest/>
            <Trap/>
            <Hero initialPosition={{x:7, y:1}}/>
            <img 
                src="./assets/tileset.gif" 
                alt="background" 
                width={GAME_SIZE}
                height={GAME_SIZE}
                />
            <Debugger/>
        </div>
    )
}

export default Board