import * as React from 'react';
import { Container, Typography } from '@material-ui/core';

import { ToDoListContext } from '../contexts';
import { ToDoItem } from '../types';

import ToDoList from './ToDoList';

const getActive = (tasks: ToDoItem[]): ToDoItem[] =>
  tasks.filter(({ done }) => !done);

const getDone = (tasks: ToDoItem[]): ToDoItem[] =>
  tasks.filter(({ done }) => done);

const HomePage: React.FC = () => {
  const { todos } = React.useContext(ToDoListContext);

  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="h1" gutterBottom={true}>
        To? Do!
      </Typography>

      <ToDoList todos={getActive(todos)} title="Future"></ToDoList>

      <ToDoList todos={getDone(todos)} title="Past"></ToDoList>
    </Container>
  );
};

export default HomePage;
