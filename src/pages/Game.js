import React from 'react';

import './Game.css';

import { useState ,useEffect} from 'react';
import {useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import Title from '../components/Title';



export default function Game() {
    const history = useHistory();

    const [random , setRandom] = useState(0);

    const [lvl , setLvl] = useState(10);

    const [evalString, setEvalString] = useState('');

    const [score , setScore] = useState(0)

    const numbersA = [ '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'];
    const opA = ['+' , '-' , '/' , '*',''];
    
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        if(timeLeft===0){
            history.push('/gameover')
            setTimeLeft(null)
        }

        // exit early when we reach 0
        if (!timeLeft) return;

        const intervalId = setInterval(() => {

        setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);

    }, [timeLeft ,history]);

    useEffect(() => {
       generateRandom();
       setTimeLeft(7)
    }, [])


    localStorage.setItem('score', `${score}`);
    if(+localStorage.getItem('score') >= +localStorage.getItem('highscore')) {
        localStorage.setItem('highscore' , `${score}`)
    }

    if(score >= Math.floor(lvl / 5)) {
        setLvl(lvl * 2);
    }
    const generateRandom =() => {
        let r = Math.floor(Math.random() * lvl) + 10
        setRandom(r)
    }

   
    
    const handleNum = (e) => {
          
          if(!numbersA.includes(evalString.slice(evalString.length -1  , evalString.length))) {
                setEvalString(evalString + e.target.textContent)
          }
    }
    const handleOp = (e) => {
        if(!opA.includes(evalString.slice(evalString.length -1  , evalString.length))) {
                setEvalString(evalString + e.target.textContent)
          }
    }
    

    const handleSubmit = () => {
        if(numbersA.includes(evalString.slice(evalString.length -1  , evalString.length))) {
            if(eval(evalString) === random) {
                setTimeLeft(7)
                setEvalString('')
                setScore(score + 1)
                generateRandom()
            }else {
                history.push('/gameover')
            }
             
           
        }
       
    }
    return(
        <div className='Game'>
            
            <Link to="/">
                <Title></Title>
            </Link>      
                 
            <div>current score : <span>{score}</span></div>
            <div className="display">
                <div className='displayRandom'>{random}</div>
                 <progress value={`${timeLeft}`} max="7" > </progress>
                <div className='evalDiv'>{evalString ? evalString : "0"}</div>
            </div>
            
            <div className="ops">
                <button className="op" onClick={handleOp}>+</button>
                <button className="op" onClick={handleOp}>-</button>
                <button className="op" onClick={handleOp}>*</button>
                <button className="op" onClick={handleOp}>/</button>
            </div>
            
            <div className="numbers">
                <button className="num" onClick={handleNum}>1</button>
                <button className="num" onClick={handleNum}>2</button>
                <button className="num" onClick={handleNum}>3</button>
                <button className="num" onClick={handleNum}>4</button>
                <button className="num" onClick={handleNum}>5</button>
                <button className="num" onClick={handleNum}>6</button>
                <button className="num" onClick={handleNum}>7</button>
                <button className="num" onClick={handleNum}>8</button>
                <button className="num" onClick={handleNum}>9</button>

            </div>
            <br />
            <button className='equal' onClick={handleSubmit}>=</button>
           

            <div className="credits">
                Made by <a href='https://github.com/Munem-Prionto' target="_blank"  rel="noopener noreferrer">Munem Prionto</a>
            </div>
        </div>
    )
}
