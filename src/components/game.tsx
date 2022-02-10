import React from 'react';
import CanvasProvider from 'context/canvas';
import ChetsProvider from 'context/chets';
import Board from './board';
import Debugger from './debugger';
import GameControl from './gameControl';


const Game = () => {


    return (
        <CanvasProvider>
            <ChetsProvider>
                <GameControl/>
                <Board />
                <Debugger />
            </ChetsProvider>
        </CanvasProvider>
    )
}

export default Game