import { createContext, useContext, useReducer } from "react";

import { InitialTodos } from "../data";
import { todoListReducer } from "./todoListReducer";

const TodoListContext = createContext(null);
const TodoListDispatchContext = createContext(() => {});

export function TodoListProvider({ children }) {
  const [todoList, dispatch] = useReducer(todoListReducer, InitialTodos);

  return (
    <TodoListContext.Provider value={todoList}>
      <TodoListDispatchContext.Provider value={dispatch}>
        {children}
      </TodoListDispatchContext.Provider>
    </TodoListContext.Provider>
  );
}

export const useTodoList = () => useContext(TodoListContext);
export const useTodoListDispatch = () => useContext(TodoListDispatchContext);
