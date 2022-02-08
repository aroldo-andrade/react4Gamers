import { ECanvasType, EGameObjectType, EDirection } from "enums";
import { IGameObjectStatus, IPosition } from "interfaces";
import React, { createContext, ReactNode, useState } from "react";
import { DEFAULT_GAME_OBJECT_STATUS, DEFAULT_INITIAL_POSITION } from "settings/constantes";
import { canvas, handlerNextPosition } from "./helpers";

export interface ICanvasContext {canvas:ECanvasType[][], updateCanvas:(direction: EDirection, position: IPosition, gameObjectType:EGameObjectType) => {
    nextPosition: IPosition;
    movimentStatus: IGameObjectStatus;
}}
const CANVAS_CONTEXT_DEFAULT_VALUE = {
    canvas :new Array<ECanvasType[]>(),
    updateCanvas: () => ({ 
        nextPosition:DEFAULT_INITIAL_POSITION,
        movimentStatus:DEFAULT_GAME_OBJECT_STATUS
     })
};
export const CanvasContext = createContext<ICanvasContext>(CANVAS_CONTEXT_DEFAULT_VALUE);

interface ICanvasProviderProps {
    children?: ReactNode | undefined;
}
const CanvasProvider = (props:ICanvasProviderProps) =>{


    const updateCanvas = (direction: EDirection, position: IPosition, gameObjectType:EGameObjectType) =>{
        let { nextPosition, movimentStatus } = handlerNextPosition(direction, position, gameObjectType)

        if(movimentStatus.validMoviment){
            setCanvasState(oldCanvasState =>{
                let _canvas = Object.assign(new Array<ECanvasType[]>(),oldCanvasState.canvas);

                let currentCanvasType = _canvas[position.y][position.x]
                _canvas[position.y][position.x] = ECanvasType.fl;
                _canvas[nextPosition.y][nextPosition.x] = currentCanvasType

                return {
                    canvas: _canvas,
                    updateCanvas: oldCanvasState.updateCanvas
                }
            })
        }

        return ({ 
            nextPosition,
            movimentStatus
         })
    }

    const [canvasState, setCanvasState] = useState({
        canvas,
        updateCanvas: updateCanvas
    });

    return (<CanvasContext.Provider value={canvasState}>{props.children}</CanvasContext.Provider>)
    
}

export default CanvasProvider