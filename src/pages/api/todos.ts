import { NextApiRequest, NextApiResponse } from 'next';

import { ToDoItem } from '../../types';

const getAllTasks = (): Promise<ToDoItem[]> => {
  return Promise.resolve([
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

const createTask = (data: Omit<ToDoItem, 'id'>): Promise<ToDoItem> => {
  return Promise.resolve({ ...data, id: '123' });
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
