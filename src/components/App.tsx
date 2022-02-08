
import { GAME_SIZE } from 'settings/constantes';
import './App.css';
import Game from './game';

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
         <Game/>
      </div>
    </div>
  );
}

export default App;
