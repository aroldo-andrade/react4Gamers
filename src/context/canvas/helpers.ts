import React, { ComponentType } from 'react';
import { ECanvasType, EGameObjectType, EDirection, HDirection, VDirection } from 'enums';
import { DEFAULT_GAME_OBJECT_STATUS, TILE_SIZE } from 'settings/constantes';
import { ICanvasMap, IGameObject, IGameObjectStatus, IPosition } from "interfaces"




export const handlerNextPosition = (direction: EDirection, position: IPosition, gameObjectType:EGameObjectType, canvas: ECanvasType[][]) => {

    const moveFuncitions: { [index: string]: (pst: IPosition) => IPosition } = {
        ArrowLeft: (pst: IPosition) => ({ x: pst.x - 1, y: pst.y, h: HDirection.LEFT, v: VDirection.DEFAULT }),
        ArrowRight: (pst: IPosition) => ({ x: pst.x + 1, y: pst.y, h: HDirection.RIGHT, v: VDirection.DEFAULT }),
        ArrowDown: (pst: IPosition) => ({ x: pst.x, y: pst.y + 1, v: VDirection.DOWN }),
        ArrowUp: (pst: IPosition) => ({ x: pst.x, y: pst.y - 1, v: VDirection.UP })
    }
    let moveFunction = moveFuncitions[direction]
    let movimentStatus:IGameObjectStatus = DEFAULT_GAME_OBJECT_STATUS
    if (moveFunction){
        let nextPosition = moveFunction(position)
        movimentStatus = checkValidMoviment(nextPosition, gameObjectType, canvas)
        if(movimentStatus.validMoviment){
            return  { nextPosition, movimentStatus }
        }

    }
    return { nextPosition:position, movimentStatus }
}

export const gameObjectTypeByCanvasType:{[index:number]:EGameObjectType} = {
    [ECanvasType.fl]:EGameObjectType.ti,
    [ECanvasType.wa]:EGameObjectType.ti,
    [ECanvasType.dr]:EGameObjectType.ti,
    [ECanvasType.tr]:EGameObjectType.ti,
    [ECanvasType.md]:EGameObjectType.en,
    [ECanvasType.de]:EGameObjectType.en,
    [ECanvasType.ch]:EGameObjectType.ti,
    [ECanvasType.he]:EGameObjectType.he,
} 

const { wa, fl, he, md, de, tr, dr, ch, drw } = ECanvasType


export const canvas = [
    [wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,dr,drw,wa,wa,wa,wa,wa],
    [wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,drw,drw,wa,wa,wa,wa,wa],
    [wa,fl,fl,wa,wa,fl,fl,fl,wa,fl,fl,fl,fl,fl,fl,fl,wa,fl,fl,wa],
    [wa,fl,de,fl,fl,tr,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,md,fl,fl,fl,fl,tr,fl,wa],
    [wa,fl,fl,fl,fl,fl,ch,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,md,fl,fl,fl,de,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,md,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,tr,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,de,fl,fl,fl,fl,fl,fl,fl,fl,tr,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,ch,fl,md,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,tr,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,ch,fl,fl,fl,fl,fl,fl,fl,fl,fl,de,fl,fl,fl,fl,fl,de,fl,wa],
    [wa,he,wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,fl,wa],
    [wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa,wa]
] as ECanvasType[][]

export const getCanvasMap = (_canvas:ECanvasType[][]) =>{
    let canvasMap:ICanvasMap[] = [];
    (_canvas as ECanvasType[][]).forEach((xArray, yindex) => {
        xArray.forEach((value, xindex) =>{
            canvasMap.push({
                position:{y:TILE_SIZE*yindex,x:TILE_SIZE*xindex},
                coord:{x:xindex,y:yindex},
                tileValue:value,
                gameObjectType: gameObjectTypeByCanvasType[value]
            })
        })
    })
    return canvasMap
}

export const getInitialChestsCount = () =>{
    return getCanvasMap(canvas).filter(f => f.tileValue === ECanvasType.ch)?.length ?? 0
}

export const getCharacterByCanvasType = (type:ECanvasType) =>{
    let componentByCanvasType:{[index:number]:React.LazyExoticComponent<ComponentType<IGameObject>>} = {
        [ECanvasType.he]:React.lazy(() => import('components/hero')),
        [ECanvasType.de]:React.lazy(() => import('components/demon')),
        [ECanvasType.md]:React.lazy(() => import('components/miniDemon')),
        [ECanvasType.tr]:React.lazy(() => import('components/trap')),
        [ECanvasType.ch]:React.lazy(() => import('components/chest')),
        [ECanvasType.dr]:React.lazy(() => import('components/door'))

    }
    return componentByCanvasType[type]
}


export const checkValidMoviment = (nextPosition:IPosition, gameObjectType:EGameObjectType, canvasProp: ECanvasType[][]):IGameObjectStatus =>{

    let {x,y} = nextPosition
    let nextPositionCanvasType = canvasProp[y][x]

    let gameObjectTypeFunctions:{[index:number]:(value: ECanvasType) => IGameObjectStatus} = {
        [EGameObjectType.en]:getkEnemyValidMoviments,
        [EGameObjectType.he]:getkHeroValidMoviments
    }

    let validFuncion = gameObjectTypeFunctions[gameObjectType];
    if(validFuncion !== undefined)
        return validFuncion(nextPositionCanvasType)

    return { validMoviment: false, dead:false, chest:false, door:false }
}

export const getkHeroValidMoviments = (value:ECanvasType):IGameObjectStatus =>{
    let {fl, ch, tr, de, md, drw} = ECanvasType
    return {
        validMoviment: [fl, ch, tr, de, md].includes(value),
        dead:[tr,md,de].includes(value),
        chest:[ch].includes(value), 
        door:[drw].includes(value),
    }
}


export const getkEnemyValidMoviments = (value:ECanvasType):IGameObjectStatus =>{
    let { fl, he } = ECanvasType
    return {
        validMoviment: [fl, he].includes(value),
        dead:[he].includes(value),
        chest:false, 
        door:false,
    }
}




