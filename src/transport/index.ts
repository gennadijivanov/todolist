import { ToDoItem } from '../types';

export const getTasks = async (host?: string): Promise<ToDoItem[]> => {
  return fetch(`${host}/api/todos`).then(
    async (res: Response) => res.json() as Promise<ToDoItem[]>,
  );
};

export const setStatus = async (
  id: string,
  done: boolean,
): Promise<Partial<ToDoItem>> => {
  return fetch(`/api/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ done }),
  }).then(async (res: Response) => res.json() as Promise<Partial<ToDoItem>>);
};

export const addTask = async (
  item: Omit<ToDoItem, 'id'>,
): Promise<ToDoItem> => {
  return fetch(`/api/todos`, {
    method: 'POST',
    body: JSON.stringify(item),
  }).then(async (res: Response) => res.json() as Promise<ToDoItem>);
};
