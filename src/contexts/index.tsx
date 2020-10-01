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
        loadToDos: () => Promise.resolve([{ title: 'todo 1' }]),
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
