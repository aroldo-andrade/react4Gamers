import React from 'react'
import { ECanvasType } from 'enums'
import { TileProps } from 'interfaces'


const Tile = (props:TileProps) => {
    const {x,y, value, coord} = props

    const tileColor = {
        [ECanvasType.w]:'red',
        [ECanvasType.d]:'yellow'
    }

    return <div style={{
                position: 'absolute',
                left: x,
                top: y,
                width: 48,
                height: 48,
                border: `1px solid ${tileColor[value]}`,
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