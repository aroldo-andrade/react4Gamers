import React, { CSSProperties, useContext, useState } from 'react'
import Tile from './tile'
import { getCanvasMap } from 'context/canvas/helpers'
import { CanvasContext } from 'context/canvas'

const Debugger = () => {


    const [showDebugger, setShowDebugger] = useState(false)
    const canvasContext = useContext(CanvasContext)
    const canvas = getCanvasMap(canvasContext.canvas)

    let buttonStyle:CSSProperties = {
        position: 'absolute',
        right: 10,
        top: 7,
        backgroundColor: '#9b2424',
        borderColor: '#581414',
        color: '#fff',
        padding: 5
    }

    return <><div style={{visibility: showDebugger ? 'visible' : 'hidden'}}>
        {canvas.map((m) => {
            let { position: { x, y }, tileValue, coord } = m
            return <Tile key={`${x}-${y}`} x={x} y={y} value={tileValue} coord={coord} />
        })}
    </div>
        <button
            style={buttonStyle}
            onClick={() => {
                setShowDebugger(old => !old)
            }}
        >DEBUGGER</button>
    </>
}


export default Debugger