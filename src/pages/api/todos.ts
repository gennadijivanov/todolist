import { NextApiRequest, NextApiResponse } from 'next';

import { ToDoItem } from '../../types';

const getAllTasks = (): Promise<ToDoItem[]> => {
  return Promise.resolve([
    {
      id: 1,
      title: 'ToDo 333',
      done: false,
    },
    {
      id: 2,
      title: 'ToDo 555',
      done: false,
    },
    {
      id: 3,
      title: 'ToDo 777',
      done: true,
    },
  ]);
};

const createTask = (data: Omit<ToDoItem, 'id'>): Promise<ToDoItem> => {
  return Promise.resolve({ ...data, id: Date.now() });
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ToDoItem | ToDoItem[]>,
): Promise<void> => {
  const { method, body } = req;

  if (method === 'GET') {
    res.status(200).json(await getAllTasks());
  } else if (method === 'POST') {
    res.status(200).json(await createTask(JSON.parse(body)));
  }
};
