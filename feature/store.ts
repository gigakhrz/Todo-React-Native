import {configureStore} from '@reduxjs/toolkit';
import todoName, {InputProps} from './todoName';
import replacebleInput, {EditProps} from './replacebleInput';
import editingText, {EditingProps} from './editingText';
import todoData, {TodoProps} from './todoData';

const store = configureStore({
  reducer: {
    todoName: todoName,
    replacebleInput: replacebleInput,
    editingText: editingText,
    todoData: todoData,
  },
});

export type RootState = {
  todoName: InputProps;
  replacebleInput: EditProps;
  editingText: EditingProps;
  todoData: TodoProps;
};

export default store;
