import React, { useContext } from 'react'
import { ChestsContext } from 'context/chets';
import { IGameObject } from 'interfaces';
import { TILE_SIZE } from 'settings/constantes';

const Chest = (props:IGameObject) =>{

    const {initialPosition:{x, y}} = props

    const chestsContext = useContext(ChestsContext)
    const opennedDoor = chestsContext.opennedChests.total === chestsContext.totalChets

    const backgroundImage = opennedDoor ? 'DOOR-OPEN' : 'DOOR'

    return (
        <div 
            style={{
                position: 'absolute',
                top: TILE_SIZE * y,
                left: (TILE_SIZE * x) - TILE_SIZE,
                width: TILE_SIZE*4,
                height: TILE_SIZE*3,
                backgroundImage:`url(./assets/${backgroundImage}.png)`,
                backgroundRepeat:'no-repeat',
            }}    
        />
    )

};

export default Chest