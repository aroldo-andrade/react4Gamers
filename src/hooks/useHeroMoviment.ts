import useEventListener from "@use-it/event-listener";
import { CanvasContext } from "context/canvas";
import { ChestsContext } from "context/chets";
import { EDirection, EGameObjectType } from "enums";
import { IPosition } from "interfaces";
import { useContext, useEffect, useState } from "react";



export const useHeroMoviment = (initialPosition: IPosition):IPosition => {

    const [positionState, setPositionState] = useState(initialPosition);
    const [isDead, setIsDead] = useState(false);
    const canvasContext = useContext(CanvasContext)
    const chestsContext = useContext(ChestsContext)

    useEffect(()=>{
        console.log('isDead', isDead)
    },[isDead])

    
    useEventListener('keydown', ({ key, ctrlKey }: { key: string, ctrlKey: boolean }) => {
        let { nextPosition, movimentStatus } = canvasContext.updateCanvas(key as EDirection, positionState, EGameObjectType.he)
        setPositionState(oldPotision => {
            setIsDead(movimentStatus.dead)
            return  (!ctrlKey) ? nextPosition : oldPotision
        })

        if(movimentStatus.chest)
            chestsContext.updateOpennedChests(nextPosition)
    })

    return positionState

}
