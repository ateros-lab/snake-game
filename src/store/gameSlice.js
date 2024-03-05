import {createSlice} from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    buttonStatus: 'Start',
    snake: [
      {x: 0, y: 0},
      {x: 1, y: 0}
    ],
    apple: {x: 1, y: 1},
  },
  reducers: {
    setStatus (state, action) {
      state.buttonStatus = action.payload;
      // state.buttonStatus = (state.buttonStatus === 'Start') ? 'Pause' : 'Start';
    }
  }
});

export const {setStatus} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;