import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface InputProps {
  input: string;
}

const initialState: InputProps = {
  input: '',
};

const todoName = createSlice({
  name: 'todoName',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

export const {setInput} = todoName.actions;
export default todoName.reducer;
