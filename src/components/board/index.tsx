import React, { Suspense } from 'react'
import { getCanvasMap, getCharacterByCanvasType } from 'context/canvas/helpers'
import { GAME_SIZE } from 'settings/constantes'



const Board = () => {

    let canvasMap = getCanvasMap().filter(f => !!getCharacterByCanvasType(f.tileValue))

    return (
        <div>
            
            <Suspense fallback={''}>
                {canvasMap.map((m, i) => {
                    let Component = getCharacterByCanvasType(m.tileValue)
                    return <Component key={i} initialPosition={m.coord} />
                })}
            </Suspense>
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

