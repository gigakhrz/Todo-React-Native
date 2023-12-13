import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoInterface} from '../components/useFetch';

export interface EditProps {
  edit: TodoInterface[];
}

const initialState: EditProps = {
  edit: [],
};

const replacebleInput = createSlice({
  name: 'replacebleInput',
  initialState,
  reducers: {
    setEdit: (state, action: PayloadAction<TodoInterface[]>) => {
      state.edit = action.payload;
    },
  },
});

export const {setEdit} = replacebleInput.actions;

export default replacebleInput.reducer;
