import { NextApiRequest, NextApiResponse } from 'next';

import { ToDoItem } from '../../types';

export default (_: NextApiRequest, res: NextApiResponse<ToDoItem[]>): void => {
  res.status(200).json([
    {
      title: 'ToDo 333',
      done: false,
    },
    {
      title: 'ToDo 555',
      done: false,
    },
    {
      title: 'ToDo 777',
      done: true,
    },
  ]);
};
