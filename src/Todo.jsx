import { useTodoListDispatch } from "./contexts/TodoListContext";

export function Todo({ item }) {
  const dispatch = useTodoListDispatch();

  return (
    <li
      onClick={(event) => {
        if (event.target.dataset.deleteTodo !== undefined) {
          dispatch({
            type: "todos/deleteTodo",
            payload: { id: item.id }
          });
        }
      }}
    >
      {item.text}
      <button className="button--delete-todo" data-delete-todo>
        X
      </button>
    </li>
  );
}
