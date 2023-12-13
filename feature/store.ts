import {configureStore} from '@reduxjs/toolkit';
import todoName, {InputProps} from './todoName';

const store = configureStore({
  reducer: {
    todoName: todoName,
  },
});

export type RootState = {
  todoName: InputProps;
};
