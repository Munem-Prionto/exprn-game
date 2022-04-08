import React from 'react';

import './GameOver.css';

import {useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Title from '../components/Title';

export default function GameOver() {
    const history = useHistory();
  return (
    <div className='GameOver'>
        <Link to="/">
          <Title></Title>
        </Link>
        <h1>Game Over :(</h1>
        <div className='score'>
          <h2>Score : <span>{localStorage.getItem('score')}</span> </h2>
          <p>High Score : <span>{localStorage.getItem('highscore')}</span> </p>
        </div>
        
        <button className='btn' onClick={()=> {
            history.push('/game');
        }}>Try Again</button>

        <div className="credits">
          Made by <a href='https://github.com/Munem-Prionto' target="_blank"  rel="noopener noreferrer">Munem Prionto</a>
        </div>
    </div>
  )
}
