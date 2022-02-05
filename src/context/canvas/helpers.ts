import { ECanvasType } from './../../enums/index';
import { TILE_SIZE } from 'settings/constantes';
import { EDirection, HDirection, ICanvasMap, IPosition, VDirection } from "interfaces"




export const handlerNextPosition = (direction: EDirection, position: IPosition) => {

    const moveFuncitions: { [index: string]: (pst: IPosition) => IPosition } = {
        ArrowLeft: (pst: IPosition) => ({ x: pst.x - 1, y: pst.y, h: HDirection.LEFT, v: VDirection.DEFAULT }),
        ArrowRight: (pst: IPosition) => ({ x: pst.x + 1, y: pst.y, h: HDirection.RIGHT, v: VDirection.DEFAULT }),
        ArrowDown: (pst: IPosition) => ({ x: pst.x, y: pst.y + 1, v: VDirection.DOWN }),
        ArrowUp: (pst: IPosition) => ({ x: pst.x, y: pst.y - 1, v: VDirection.UP })
    }
    let moveFunction = moveFuncitions[direction]
    if (moveFunction)
        return moveFunction(position)
    return position
}

let { w, d } = ECanvasType
export const canvas = [
    [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
    [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
    [w,d,d,w,d,d,d,d,w,d,d,d,d,d,d,d,w,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,w],
    [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w]
]

export const getCanvasMap = () =>{
    let canvasMap:ICanvasMap[] = []
    canvas.forEach((xArray, yindex) => {
        xArray.forEach((value, xindex) =>{
            canvasMap.push({
                position:{y:TILE_SIZE*yindex,x:TILE_SIZE*xindex},
                coord:{x:xindex,y:yindex},
                tileValue:value
            })
        })
    })
    return canvasMap
}

