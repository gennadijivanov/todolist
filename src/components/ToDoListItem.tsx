import * as React from 'react';
import { Checkbox, ListItem } from '@material-ui/core';

import { ToDoItem } from '../types';
import { ToDoListContext } from '../contexts';

interface Props {
  todo: ToDoItem;
}

const ToDoListItem: React.FC<Props> = ({
  todo: { id, title, done },
}: Props) => {
  const context = React.useContext(ToDoListContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    context.setStatus(id, event.target.checked);
  };

  return (
    <ListItem>
      <Checkbox
        checked={done}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{' '}
      {title}
    </ListItem>
  );
};

export default ToDoListItem;
