import { ToDoItem } from '../types';

export const getTasks = async (host?: string): Promise<ToDoItem[]> => {
  return fetch(`${host}/api/todos`).then(
    async (res: Response) => res.json() as Promise<ToDoItem[]>,
  );
};

export const setStatus = async (
  id: string,
  done: boolean,
  host?: string,
): Promise<Partial<ToDoItem>> => {
  return fetch(`${host}/api/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ done }),
  }).then(async (res: Response) => res.json() as Promise<Partial<ToDoItem>>);
};
