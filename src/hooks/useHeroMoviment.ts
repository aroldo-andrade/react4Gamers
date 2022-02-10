import useEventListener from "@use-it/event-listener";
import { CanvasContext } from "context/canvas";
import { ChestsContext } from "context/chets";
import { EDirection, EGameObjectType } from "enums";
import { IPosition } from "interfaces";
import { useContext, useState } from "react";



export const useHeroMoviment = (initialPosition: IPosition):IPosition => {

    const [positionState, setPositionState] = useState(initialPosition);
    const canvasContext = useContext(CanvasContext)
    const chestsContext = useContext(ChestsContext)
    
    useEventListener('keydown', ({ key, ctrlKey }: { key: string, ctrlKey: boolean }) => {
        let { nextPosition, movimentStatus } = canvasContext.updateCanvas(key as EDirection, positionState, EGameObjectType.he)
        setPositionState(oldPotision => {
            return  (!ctrlKey) ? nextPosition : oldPotision
        })

        if(movimentStatus.chest){
            chestsContext.updateOpennedChests(nextPosition)
        }

    })

    return positionState

}
