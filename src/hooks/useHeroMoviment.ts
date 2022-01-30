import useEventListener from "@use-it/event-listener";
import { handlerNextPosition } from "context/canvas/helpers";
import { EDirection, IPosition } from "interfaces";
import { useState } from "react";



enum HDirection {
    RIGHT = 1,
    LEFT = -1,
}

enum VDirection {
    UP = -20,
    DOWN = 20,
    DEFAULT = 0
}


export const useHeroMoviment = (initialPosition: IPosition) => {

    const [{ x, y }, setPositionState] = useState(initialPosition);
    const [hDirection, setHDirection] = useState(HDirection.RIGHT);
    const [vDirection, setVDirection] = useState(VDirection.DEFAULT);



    useEventListener('keydown', ({ key, ctrlKey }: { key: string, ctrlKey: boolean }) => {
        setPositionState(oldPotision => {
            let nextMoviment = handlerNextPosition(key as EDirection, oldPotision)
            nextMoviment.h !== undefined && setHDirection(nextMoviment.h)
            nextMoviment.v !== undefined && setVDirection(nextMoviment.v)
            return  (!ctrlKey) ? nextMoviment : oldPotision
        })
    })

    return {
        x, y, hDirection, vDirection
    }

}
