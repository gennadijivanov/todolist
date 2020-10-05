import { ToDoItem } from '../types';

const API_ROOT = '/api/todos';

const parseResponse = async <T>(res: Promise<Response>): Promise<T> =>
  (await res).json() as Promise<T>;

export const getTasks = async (host?: string): Promise<ToDoItem[]> =>
  parseResponse<ToDoItem[]>(fetch(`${host}${API_ROOT}`));

export const setStatus = async (
  id: number,
  done: boolean,
): Promise<Partial<ToDoItem>> =>
  parseResponse<Partial<ToDoItem>>(
    fetch(`${API_ROOT}${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ done }),
    }),
  );

export const addTask = async (item: Omit<ToDoItem, 'id'>): Promise<ToDoItem> =>
  parseResponse<ToDoItem>(
    fetch(API_ROOT, {
      method: 'POST',
      body: JSON.stringify(item),
    }),
  );
