import * as React from 'react';
import { Container, Typography } from '@material-ui/core';

import { ToDoListContext } from '../contexts';
import { ToDoItem } from '../types';

import ToDoList from './ToDoList';

interface Props {
  todos: ToDoItem[];
}

const getActive = (tasks: ToDoItem[]): ToDoItem[] =>
  tasks.filter(({ done }) => !done);

const getDone = (tasks: ToDoItem[]): ToDoItem[] =>
  tasks.filter(({ done }) => done);

const HomePage: React.FC<Props> = ({ todos: preloaded }: Props) => {
  const context = React.useContext(ToDoListContext);
  const [toDos, setToDos] = React.useState<ToDoItem[]>(preloaded);

  const handleLoadToDos = () =>
    context.loadToDos().then((todos) => {
      if (todos.length > 0) {
        setToDos(todos);
      }
    });

  React.useEffect(() => {
    if (toDos.length === 0) {
      handleLoadToDos();
    }
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="h1" gutterBottom={true}>
        To? Do!
      </Typography>

      <ToDoList todos={getActive(toDos)} title="Future"></ToDoList>

      <ToDoList todos={getDone(toDos)} title="Past"></ToDoList>
    </Container>
  );
};

export default HomePage;
