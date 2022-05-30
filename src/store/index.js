import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialSecretNumberState = {
  secretNumber: 0,
  guess: 0,
  hint: '',
  isStarted: false,
  limit: 0,
  isLimit: false
};

const guessSlice = createSlice({
  name: 'guess',
  initialState: initialSecretNumberState,
  reducers: {
    start(state){
      state.secretNumber = Math.floor(Math.random() * 20 + 1);
      state.isStarted = true;
      state.limit = 0;
      state.hint = '';
      state.isLimit = false;
    },
    guess(state, action){
      state.guess = +action.payload;
    },
    game(state){
      state.limit++;

      if(state.guess < state.secretNumber){
        state.hint = 'Too low'
      } if(state.guess > state.secretNumber) {
        state.hint = 'Too high'
      } if(state.guess === state.secretNumber) {
        state.hint = 'You Win!'
      }

      if(state.limit > 3){
        state.hint = 'You Lose!'
        state.isLimit = true;
      }
    }

  }
})

const store = configureStore({
  reducer: { guess: guessSlice.reducer }
})

export const guessingActions = guessSlice.actions;

export default store;
