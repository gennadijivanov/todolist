import * as React from 'react';
import { List, Paper, Typography } from '@material-ui/core';

import { ToDoItem } from '../types';

import ToDoListItem from './ToDoListItem';

interface Props {
  todos: ToDoItem[];
}

const ToDoList: React.FC<Props> = ({ todos }: Props) => {
  return (
    <Paper elevation={2}>
      {todos.length > 0 ? (
        <List>
          {todos.map((todo) => (
            <ToDoListItem key={todo.title} todo={todo}></ToDoListItem>
          ))}
        </List>
      ) : (
        <Typography variant="h3">Nothing to do</Typography>
      )}
    </Paper>
  );
};

export default ToDoList;
