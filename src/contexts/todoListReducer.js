import { uuid } from "../data";

export function todoListReducer(todos, action) {
  switch (action.type) {
    case "todos/addTodo": {
      return [
        ...todos,
        {
          id: uuid(),
          text: action.payload.text
        }
      ];
    }

    case "todos/deleteTodo": {
      return todos.filter((item) => item.id !== action.payload.id);
    }

    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
