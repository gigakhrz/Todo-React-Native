import {configureStore} from '@reduxjs/toolkit';
import todoName, {InputProps} from './todoName';
import replacebleInput, {EditProps} from './replacebleInput';
import editingText, {EditingProps} from './editingText';

const store = configureStore({
  reducer: {
    todoName: todoName,
    replacebleInput: replacebleInput,
    editingText: editingText,
  },
});

export type RootState = {
  todoName: InputProps;
  replacebleInput: EditProps;
  editingText: EditingProps;
};
