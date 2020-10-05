import React from 'react';

import { setStatus as setStatusTransport } from '../transport';
import { ToDoItem } from '../types';

interface IToDoListContext {
  todos: ToDoItem[];
  setStatus(id: string, done: boolean): Promise<void>;
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

  const patchItem = (itemId: string, change: Partial<ToDoItem>) => {
    const target = todos.find(({ id }) => id === itemId);
    Object.assign(target, change);
    setTodos([...todos]);
  };

  const setStatus = async (itemId: string, done: boolean) => {
    const changedTask = await setStatusTransport(itemId, done);
    patchItem(itemId, changedTask);
  };

  return (
    <ToDoListContext.Provider
      value={{
        todos,
        setStatus,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
