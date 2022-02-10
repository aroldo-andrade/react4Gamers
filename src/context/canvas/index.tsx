import { ECanvasType, EGameObjectType, EDirection, EGameStatus } from "enums";
import { IGameObjectStatus, IPosition } from "interfaces";
import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { DEFAULT_GAME_OBJECT_STATUS, DEFAULT_INITIAL_POSITION } from "settings/constantes";
import { canvas, handlerNextPosition } from "./helpers";
import _ from 'lodash';
import { ChestsContext } from "context/chets";
export interface ICanvasContext {
    canvas: ECanvasType[][],
    gameStatus: EGameStatus,
    updateGameStatus: () => void,
    updateCanvas: (direction: EDirection, position: IPosition, gameObjectType: EGameObjectType) => {
        nextPosition: IPosition;
        movimentStatus: IGameObjectStatus;
    }
}
const CANVAS_CONTEXT_DEFAULT_VALUE = {
    canvas: new Array<ECanvasType[]>(),
    gameStatus: EGameStatus.playing,
    updateGameStatus: () => { },
    updateCanvas: () => ({
        nextPosition: DEFAULT_INITIAL_POSITION,
        movimentStatus: DEFAULT_GAME_OBJECT_STATUS
    })
};
export const CanvasContext = createContext<ICanvasContext>(CANVAS_CONTEXT_DEFAULT_VALUE);

interface ICanvasProviderProps {
    children?: ReactNode | undefined;
}
const CanvasProvider = (props: ICanvasProviderProps) => {

    const chestsContext = useContext(ChestsContext)

    const checkWinOrDead = useCallback((currentGameStatus: EGameStatus, movimentStatus: IGameObjectStatus): EGameStatus => {
        let _gameStatus = currentGameStatus
        if (movimentStatus.dead)
            _gameStatus = EGameStatus.lost

        if (chestsContext.totalChets === chestsContext.opennedChests.total && movimentStatus.door) 
            _gameStatus = EGameStatus.won
        
        return _gameStatus

    }, [chestsContext])

    const updateCanvas = (direction: EDirection, position: IPosition, gameObjectType: EGameObjectType) => {
        let { nextPosition, movimentStatus } = handlerNextPosition(direction, position, gameObjectType, canvasState.canvas)

        let _gameStatus = checkWinOrDead(canvasState.gameStatus, movimentStatus)

        setCanvasState(oldCanvasState => {
            let _canvas = Object.assign(new Array<ECanvasType[]>(), oldCanvasState.canvas);

            if(movimentStatus.validMoviment){
                let currentCanvasType = _canvas[position.y][position.x]
                _canvas[position.y][position.x] = ECanvasType.fl;
                _canvas[nextPosition.y][nextPosition.x] = currentCanvasType
            }

            return {
                ...oldCanvasState,
                canvas: _canvas,
                gameStatus: _gameStatus,

            }
        })


        return ({
            nextPosition,
            movimentStatus
        })
    }

    const [canvasState, setCanvasState] = useState<ICanvasContext>({
        canvas: _.cloneDeep(canvas),
        gameStatus: EGameStatus.playing,
        updateGameStatus: () => setCanvasState(old => ({ ...old, gameStatus: EGameStatus.playing })),
        updateCanvas: updateCanvas
    });

    return (<CanvasContext.Provider value={canvasState}>{props.children}</CanvasContext.Provider>)

}

export default CanvasProvider