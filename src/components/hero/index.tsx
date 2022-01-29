import useEventListener from '@use-it/event-listener';
import React, { useMemo, useState } from 'react'
import { HEAD_OFFSET, TILE_SIZE, TILE_SIZE_OFFSET } from 'settings/constantes';
import './index.css'

const INITIAL_POSITION = {
    x: 15,
    y: 15
}

enum HDirection {
    RIGHT = 1,
    LEFT = -1,
}

enum VDirection {
    UP = -20,
    DOWN = 20,
    DEFAULT = 0
}

const Hero = () =>{

    const [{x,y}, setPositionState] = useState(INITIAL_POSITION);
    const [hDirection, setHDirection] = useState(HDirection.RIGHT);
    const [vDirection, setVDirection] = useState(VDirection.DEFAULT);

    const moveFuncitions:{[index:string]:Function} = useMemo(() =>({
       ArrowLeft:() => {
           setPositionState(oldPotision => ({x:oldPotision.x-1, y:oldPotision.y}))
           setHDirection(HDirection.LEFT)
           setVDirection(VDirection.DEFAULT)
        },
       ArrowRight:() => {
           setPositionState(oldPotision => ({x:oldPotision.x+1, y:oldPotision.y}))
           setHDirection(HDirection.RIGHT)
           setVDirection(VDirection.DEFAULT)
        },
       ArrowDown:() => {
            setPositionState(oldPotision => ({x:oldPotision.x, y:oldPotision.y-1}))
            setVDirection(VDirection.DOWN)
       },
       ArrowUp:() => {
            setPositionState(oldPotision => ({x:oldPotision.x, y:oldPotision.y+1}))
            setVDirection(VDirection.UP)
       }
    }),[])

    useEventListener('keydown',({key}:{key:string}) =>{
        let moveFunction = moveFuncitions[key]
        if(moveFunction) moveFunction()   
    })


    return (
        <div 
            style={{
                position: 'absolute',
                width: TILE_SIZE,
                bottom: TILE_SIZE*y,
                left: TILE_SIZE*x,
                height: TILE_SIZE+HEAD_OFFSET,
                backgroundImage:"url(./assets/HERO.png)",
                backgroundRepeat:'no-repeat',
                animation: 'hero-animation 1s steps(4) infinite',
                backgroundPosition: `0 -${TILE_SIZE - TILE_SIZE_OFFSET}px`,
                transform: `scaleX(${hDirection}) rotate(${vDirection}deg)`,
            }}    
        />
    )

};

export default Hero