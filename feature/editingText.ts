import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface editingProps {
  editing: boolean;
}

const initialState: editingProps = {
  editing: false,
};

const editingText = createSlice({
  name: 'editingText',
  initialState,
  reducers: {
    setEditing: (state, action: PayloadAction<boolean>) => {
      state.editing = action.payload;
    },
  },
});

export const {setEditing} = editingText.actions;
export default editingText.reducer;
