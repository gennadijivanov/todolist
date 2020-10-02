import * as React from 'react';
import { Checkbox, ListItem } from '@material-ui/core';

import { ToDoItem } from '../types';

interface Props {
  todo: ToDoItem;
}

const ToDoListItem: React.FC<Props> = ({ todo: { title, done } }: Props) => {
  return (
    <ListItem>
      <Checkbox
        checked={done}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{' '}
      {title}
    </ListItem>
  );
};

export default ToDoListItem;
