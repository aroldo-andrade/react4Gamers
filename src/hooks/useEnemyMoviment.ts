
import useInterval from "@use-it/interval";
import { CanvasContext } from "context/canvas";
import { EDirection, EGameObjectType } from "enums";
import { IPosition } from "interfaces";
import { useContext, useState } from "react";


export const useEnemyMoviment = (initialPosition:IPosition):IPosition =>{

    const [positionState, setPositionState] = useState(initialPosition);
    const canvasContext = useContext(CanvasContext)

    useInterval(()=>{
        let funcitons = Object.keys(EDirection);
        const randon = Math.floor(Math.random() * 4)
        let { nextPosition } = canvasContext.updateCanvas(funcitons[randon] as EDirection, positionState, EGameObjectType.en)
        setPositionState(nextPosition)
    },500)


   

    return positionState

}
