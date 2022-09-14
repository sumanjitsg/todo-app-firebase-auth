import { useState } from "react";

import { useTodoListDispatch } from "./contexts/TodoListContext";

export function AddTodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodoListDispatch();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onKeyDown = (event) => {
    if (event.code === "Enter") {
      dispatch({
        type: "todos/addTodo",
        payload: { text: event.target.value }
      });

      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Create a new todo..."
        aria-label="Create new todo"
      />
    </form>
  );
}
