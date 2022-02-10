import { getInitialChestsCount } from 'context/canvas/helpers';
import { IPosition } from 'interfaces';
import React, { createContext, ReactNode, useState } from 'react';

export interface IChetsContext {
    totalChets: number,
    opennedChests:{
        total:number,
        positions:IPosition[]
    },
    updateOpennedChests:(position:IPosition) => void
}
const CHESTS_CONTEXT_DEFAULT_VALUE:IChetsContext = {
    totalChets: getInitialChestsCount(),
    opennedChests:{
        total:0,
        positions:[]
    },
    updateOpennedChests:(position:IPosition) => {}
};
export const ChestsContext = createContext(CHESTS_CONTEXT_DEFAULT_VALUE)
interface IChetsProviderProps {
    children?: ReactNode | undefined;
}
const ChetsProvider = (props:IChetsProviderProps) =>{

    const updateOpennedChests = (position:IPosition) => {
        updateChestsState(oldChestsState =>{
            let _chestsState = Object.assign({},oldChestsState);
            _chestsState.opennedChests.total += 1
            _chestsState.opennedChests.positions.push(position)
            return _chestsState
        })
    }

    const [chestsState, updateChestsState] = useState({
        ...CHESTS_CONTEXT_DEFAULT_VALUE,
        updateOpennedChests
    })

    

    return (<ChestsContext.Provider value={chestsState}>{props.children}</ChestsContext.Provider>)

}

export default ChetsProvider