import React from 'react';
import { ToDoItem } from '../types';

interface IToDoListContext {
  todos: ToDoItem[];
  loadToDos(): Promise<ToDoItem[]>;
  setStatus(id: string, done: boolean): void;
}

export const ToDoListContext = React.createContext<IToDoListContext>(undefined);

export const WithToDoListProvider: React.FC<{ todos: ToDoItem[] }> = ({
  children,
  todos: preloaded,
}: {
  todos: ToDoItem[];
  children?: React.ReactNode;
}) => {
  const [todos, setTodos] = React.useState(preloaded);

  const setStatus = (itemId: string, done: boolean) => {
    const target = todos.find(({ id }) => id === itemId);
    if (target) {
      target.done = done;
      setTodos([...todos]);
    }
  };

  return (
    <ToDoListContext.Provider
      value={{
        todos,
        setStatus,
        loadToDos: () =>
          fetch('/api/todos').then(
            async (res: Response) => res.json() as Promise<ToDoItem[]>,
          ),
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
