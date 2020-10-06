import * as React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { ToDoListContext } from '../contexts';
import { ToDoItem } from '../types';

import AddTask from './AddTask';
import ToDoList from './ToDoList';

const getActive = (tasks: ToDoItem[]): ToDoItem[] =>
  tasks.filter(({ done }) => !done);

const getDone = (tasks: ToDoItem[]): ToDoItem[] =>
  tasks.filter(({ done }) => done);

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  }),
);

const HomePage: React.FC = () => {
  const classes = useStyles();
  const { todos } = React.useContext(ToDoListContext);

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            To? Do!
          </Typography>
          <AddTask />
        </Toolbar>
      </AppBar>

      <ToDoList todos={getActive(todos)} title="Future"></ToDoList>

      <ToDoList todos={getDone(todos)} title="Past"></ToDoList>
    </Container>
  );
};

export default HomePage;
