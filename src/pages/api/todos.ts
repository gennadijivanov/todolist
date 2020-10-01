import { NextApiRequest, NextApiResponse } from 'next';

import { ToDoItem } from '../../types';

export default (req: NextApiRequest, res: NextApiResponse<ToDoItem[]>): void => {
  res.status(200).json([
    {
      title: 'ToDo 777',
    },
  ]);
};
