import React from 'react';
import { GAME_SIZE } from 'settings/constantes';
import './App.css';
import Board from './board';
import Debugger from './debugger';

function App() {
  return (
    <div className="App">
      <div 
        style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE
        }}
        >
        <Board/>
        <Debugger/>
      </div>
    </div>
  );
}

export default App;
