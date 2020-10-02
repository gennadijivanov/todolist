import { NextApiRequest, NextApiResponse } from 'next';

import { ToDoItem } from '../../types';

export default (_: NextApiRequest, res: NextApiResponse<ToDoItem[]>): void => {
  res.status(200).json([
    {
      id: '333',
      title: 'ToDo 333',
      done: false,
    },
    {
      id: '555',
      title: 'ToDo 555',
      done: false,
    },
    {
      id: '777',
      title: 'ToDo 777',
      done: true,
    },
  ]);
};
