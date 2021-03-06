import { NextApiRequest, NextApiResponse } from 'next';

import { ToDoItem } from '../../../types';

export default (
  req: NextApiRequest,
  res: NextApiResponse<Partial<ToDoItem>>,
): void => {
  const {
    method,
    query: { id },
    body,
  } = req;

  if (method === 'PATCH') {
    const { done } = JSON.parse(body);
    res
      .status(200)
      .json({ id: parseInt(id as string, 10), done: done as boolean });
  } else {
    res.status(500);
  }
};
