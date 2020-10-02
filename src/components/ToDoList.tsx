import * as React from 'react';
import { List, Paper, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { ToDoItem } from '../types';

import ToDoListItem from './ToDoListItem';

interface Props {
  todos: ToDoItem[];
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
    },
  }),
);

const ToDoList: React.FC<Props> = ({ todos, title }: Props) => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
      <Typography variant="h3">{title}</Typography>

      {todos.length > 0 ? (
        <List>
          {todos.map((todo) => (
            <ToDoListItem key={todo.title} todo={todo}></ToDoListItem>
          ))}
        </List>
      ) : (
        <Typography variant="h5">Nothing to do</Typography>
      )}
    </Paper>
  );
};

export default ToDoList;
