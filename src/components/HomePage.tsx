import * as React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';

import { ToDoListContext } from '../contexts';
import { ToDoItem } from '../types';

interface Props {
  todos: ToDoItem[];
}

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
        <div style={{ float: 'right' }}>right</div>
      </Typography>

      <Paper elevation={2}>
        <ul>
          {toDos.map(({ title }) => (
            <li key={title}>
              <h4>{title}</h4>
            </li>
          ))}
        </ul>
      </Paper>
    </Container>
  );
};

export default HomePage;