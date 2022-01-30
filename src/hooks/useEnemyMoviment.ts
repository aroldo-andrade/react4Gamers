
import useInterval from "@use-it/interval";
import { handlerNextPosition } from "context/canvas/helpers";
import { EDirection, HDirection, IPosition, VDirection } from "interfaces";
import { useState } from "react";





export const useEnemyMoviment = (initialPosition:IPosition) =>{

    const [{ x, y }, setPositionState] = useState(initialPosition);
    const [hDirection, setHDirection] = useState(HDirection.RIGHT);
    const [vDirection, setVDirection] = useState(VDirection.DEFAULT);


    useInterval(()=>{
        setPositionState(oldPotision => {
            let funcitons = Object.keys(EDirection);
            const randon = Math.floor(Math.random() * 4)
            let nextMoviment = handlerNextPosition(funcitons[randon] as EDirection, oldPotision)
            nextMoviment.h !== undefined && setHDirection(nextMoviment.h)
            nextMoviment.v !== undefined && setVDirection(nextMoviment.v)
            return nextMoviment
        })
    },500)

    return {
        x, y, hDirection, vDirection
    }

}
