import {configureStore} from '@reduxjs/toolkit';
import todoName, {InputProps} from './todoName';
import replacebleInput, {EditProps} from './replacebleInput';

const store = configureStore({
  reducer: {
    todoName: todoName,
    replacebleInput: replacebleInput,
  },
});

export type RootState = {
  todoName: InputProps;
  replacebleInput: EditProps;
};
