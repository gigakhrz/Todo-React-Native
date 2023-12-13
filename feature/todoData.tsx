import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoInterface} from '../components/useFetch';

export interface TodoProps {
  todo: TodoInterface[];
}

const initialState: TodoProps = {
  todo: [],
};

const todoData = createSlice({
  name: 'todoData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<TodoInterface[]>) => {
      state.todo = action.payload;
    },
  },
});

export const {setData} = todoData.actions;

export default todoData.reducer;
