import React from 'react'
import { ECanvasType } from 'enums'
import { TileProps } from 'interfaces'


const Tile = (props:TileProps) => {
    const {x,y, value, coord} = props

    const tileColor:{[index:number]:string} = {
        [ECanvasType.wa]:'#d8c731',
        [ECanvasType.fl]:'#4e4e4e',
        [ECanvasType.he]:'#cd1cdd',
        [ECanvasType.dr]:'#ffffff',
        [ECanvasType.drw]:'#ffffff',
        [ECanvasType.de]:'#ff0000',
        [ECanvasType.md]:'#1dd3dd',
        [ECanvasType.tr]:'#39db24',
        [ECanvasType.ch]:'#ff7b00',
    }

    return <div style={{
                position: 'absolute',
                left: x,
                top: y,
                width: 48,
                height: 48,
                border: `2px solid ${tileColor[value]}`,
                color: tileColor[value],
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
            }}>
                <span style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    fontSize: 7,
                    color: 'white',
                    backgroundColor:'black',
                    padding: 1
                }}>{`y:${coord.y}-x:${coord.x}`}</span>
                {value}
            </div>
}


export default Tile