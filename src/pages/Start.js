import React from 'react'

import './Start.css';

import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';

import Title from '../components/Title';
export default function Start() {
    const history = useHistory();

  return (
    <div className='Start'>
        <Link to="/">
          <Title></Title>
        </Link> 
        <p className='rules'>
          Make an arithmetic  <span> expression</span> that's equal to the given number .
        </p>
        <button className='btn' onClick={()=> {
            history.push('/game');
        }}>Play</button>

        <div className="credits">
          Made by <a href='https://github.com/Munem-Prionto' target="_blank"  rel="noopener noreferrer">Munem Prionto</a>
        </div>
    </div>
  )
}
