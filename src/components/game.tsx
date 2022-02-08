import CanvasProvider from 'context/canvas';
import ChetsProvider from 'context/chets';
import React from 'react';
import Board from './board';
import Debugger from './debugger';


const Game = () => {


    return (
        <CanvasProvider>
            <ChetsProvider>
                <Board />
                <Debugger />
            </ChetsProvider>
        </CanvasProvider>
    )
}

export default Game