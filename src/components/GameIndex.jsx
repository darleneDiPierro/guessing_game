import React from 'react';
import './GameIndex.css';
import { useSelector, useDispatch } from 'react-redux';
import { guessingActions } from '../store/index';

const GameIndex = () => {
  const dispatch = useDispatch();
  const guess = useSelector(state => state.guess.guess);
  const hint = useSelector(state => state.guess.hint);
  const answer = useSelector(state => state.guess.secretNumber);
  const isLimit = useSelector(state => state.guess.isLimit);
  const limit = useSelector(state => state.guess.limit);

  const guessingHandler = (e) => {
    dispatch(guessingActions.guess(e.target.value))
  };

  const toggleStart = () => {
    dispatch(guessingActions.start());
  }

  const toggleGuessButton = () => {
    dispatch(guessingActions.game());
  }

  return (
    <main className='GameIndex'>
      <h1>Guessing Game</h1>
      {!isLimit && (
        <div className='content'>
        <p>Your Guess <span>{guess}</span></p>
        <p>guessing: {limit}</p>
        <input onClick={guessingHandler} type='number' label='guessing' min='1' max='20'/>
        <button onClick={toggleGuessButton}>Guess</button>
        </div>
      )}
      <p>{hint}</p>
      {isLimit && (
        <div>
          <p>Answer is {answer}</p>
          <button onClick={toggleStart}>START</button>
        </div>
      )}
    </main>
  )
}

export default GameIndex;
