import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ReplaceProps {
  _id: string;
  title: string;
  complated: boolean;
}

export interface EditProps {
  edit: ReplaceProps[];
}

const initialState: EditProps = {
  edit: [],
};

const replacebleInput = createSlice({
  name: 'replacebleInput',
  initialState,
  reducers: {
    setEdit: (state, action: PayloadAction<ReplaceProps[]>) => {
      state.edit = action.payload;
    },
  },
});

export const {setEdit} = replacebleInput.actions;

export default replacebleInput.reducer;
