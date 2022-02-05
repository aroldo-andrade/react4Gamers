import React, { ComponentType } from 'react';
import { ECanvasType } from './../../enums/index';
import { TILE_SIZE } from 'settings/constantes';
import { EDirection, HDirection, ICanvasMap, IGameObject, IPosition, VDirection } from "interfaces"




export const handlerNextPosition = (direction: EDirection, position: IPosition) => {

    const moveFuncitions: { [index: string]: (pst: IPosition) => IPosition } = {
        ArrowLeft: (pst: IPosition) => ({ x: pst.x - 1, y: pst.y, h: HDirection.LEFT, v: VDirection.DEFAULT }),
        ArrowRight: (pst: IPosition) => ({ x: pst.x + 1, y: pst.y, h: HDirection.RIGHT, v: VDirection.DEFAULT }),
        ArrowDown: (pst: IPosition) => ({ x: pst.x, y: pst.y + 1, v: VDirection.DOWN }),
        ArrowUp: (pst: IPosition) => ({ x: pst.x, y: pst.y - 1, v: VDirection.UP })
    }
    let moveFunction = moveFuncitions[direction]
    if (moveFunction){
        let nextPosition = moveFunction(position)
        let isValidMoviment = checkValidMoviment(nextPosition)
        if(isValidMoviment){
            return nextPosition
        }

    }
    return position
}


const { wa, fl, he, md, de, tr, dr, ch } = ECanvasType

var wd = window as any
wd.canvas = [
    [wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,dr,dr,wa,wa,wa,wa,wa],
    [wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,dr,dr,wa,wa,wa,wa,wa],
    [wa,fl,fl,wa,ch,fl,fl,fl,wa,fl,fl,fl,fl,fl,fl,fl,wa,fl,fl,wa],
    [wa,fl,de,fl,fl,tr,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,md,fl,fl,fl,fl,tr,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,md,fl,fl,fl,de,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,md,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,tr,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,de,fl,fl,fl,fl,fl,fl,fl,fl,tr,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,md,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,tr,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,de,fl,fl,fl,fl,fl,de,fl,wa],
    [wa,he,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa]
] as ECanvasType[][]

export const getCanvasMap = () =>{
    let canvasMap:ICanvasMap[] = [];
    (wd.canvas as ECanvasType[][]).forEach((xArray, yindex) => {
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

export const getCharacterByCanvasType = (type:ECanvasType) =>{
    let componentByCanvasType:{[index:number]:React.LazyExoticComponent<ComponentType<IGameObject>>} = {
        [ECanvasType.he]:React.lazy(() => import('components/hero')),
        [ECanvasType.de]:React.lazy(() => import('components/demon')),
        [ECanvasType.md]:React.lazy(() => import('components/miniDemon')),
        [ECanvasType.tr]:React.lazy(() => import('components/trap')),
        [ECanvasType.ch]:React.lazy(() => import('components/chest'))
    }
    return componentByCanvasType[type]
}


export const checkValidMoviment = (nextPosition:IPosition) =>{

    let {x,y} = nextPosition
    let nextPositionCanvasType = wd.canvas[y][x]
    return nextPositionCanvasType === ECanvasType.fl
}




