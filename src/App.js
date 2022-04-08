import './App.css';
/* pages */

import Game from './pages/Game';
import GameOver from './pages/GameOver';
import Start from './pages/Start';
/* Route */

import {BrowserRouter,Route ,Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Start></Start>
          </Route>
          <Route path="/game" exact>
            <Game></Game>
          </Route>
          <Route path="/gameover" exact>
            <GameOver></GameOver>
          </Route>
        </Switch>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
