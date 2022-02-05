import React, { useState } from 'react'
import Tile from './tile'
import { getCanvasMap } from 'context/canvas/helpers'
import useInterval from '@use-it/interval'

const Debugger = () => {

    

    const canvas = getCanvasMap()
 

    return <div>
        {canvas.map((m)=> {
            let {position:{x,y}, tileValue, coord} = m
            return <Tile key={`${x}-${y}`} x={x} y={y} value={tileValue} coord={coord}/>
        })}
    </div>
}


export default Debugger