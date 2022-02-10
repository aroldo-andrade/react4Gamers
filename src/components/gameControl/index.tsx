import { CanvasContext } from 'context/canvas';
import { EGameStatus } from 'enums';
import React, { useContext } from 'react';



const GameControl = () => {

    const canvasContext = useContext(CanvasContext)

    if (canvasContext.gameStatus === EGameStatus.won) {
        canvasContext.updateGameStatus()
        setTimeout(() => {
            alert('Você Ganhou!')
            window.location.reload()
        })
    }

    if (canvasContext.gameStatus === EGameStatus.lost) {
        canvasContext.updateGameStatus()
        setTimeout(() => {
            alert('Você Perdeu!')
            window.location.reload()
        })
    }


    return <></>
}

export default GameControl


