import React, { useContext } from 'react'
import Tile from './tile'
import { getCanvasMap } from 'context/canvas/helpers'
import { CanvasContext } from 'context/canvas'

const Debugger = () => {

    
    const canvasContext = useContext(CanvasContext)
    const canvas = getCanvasMap(canvasContext.canvas)

    return <div>
        {canvas.map((m)=> {
            let {position:{x,y}, tileValue, coord} = m
            return <Tile key={`${x}-${y}`} x={x} y={y} value={tileValue} coord={coord}/>
        })}
    </div>
}


export default Debugger