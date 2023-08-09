// src/slices/counterSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  names:string
}

const initialState: CounterState = {
  value: 0,
  names:''
};

const Userinfos = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    increment: (state) => {
      state.value += 1;
    },


    decrement: (state) => {
      state.value -= 1;
    },

    setNames: (state, actions) => {
        state.names=actions.payload;
      }
  },



});

export const { increment, decrement, setNames } = Userinfos.actions;

export default Userinfos.reducer;
