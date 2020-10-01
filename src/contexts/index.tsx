import React from 'react';
import { ToDoItem } from '../types';

interface IToDoListContext {
  loadToDos(): Promise<ToDoItem[]>;
}

export const ToDoListContext = React.createContext<IToDoListContext>(undefined);

export const WithToDoListProvider: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ToDoListContext.Provider
      value={{
        loadToDos: () => fetch('api/todos').then(async (res: Response) => res.json() as Promise<ToDoItem[]>),
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
