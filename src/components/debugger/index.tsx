import React from 'react'
import { getCanvasMap } from 'context/canvas/helpers'
import Tile from './tile'

const Debugger = () => {

    let canvasMap = getCanvasMap()
    return <div>
        {canvasMap.map((m)=> {
            let {position:{x,y}, tileValue, coord} = m
            return <Tile key={`${x}-${y}`} x={x} y={y} value={tileValue} coord={coord}/>
        })}
    </div>
}


export default Debugger