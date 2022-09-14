import { useNavigate } from "react-router-dom";
import { AddTodoForm } from "../AddTodoForm";
import { useAuth } from "../contexts/AuthContext";
import { TodoList } from "../TodoList";
import { TodoListProvider } from "../contexts/TodoListContext";

export function TodoListPage() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <TodoListProvider>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem"
        }}
      >
        <h1>TODO</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem"
          }}
        >
          <div>Hi, {currentUser?.displayName}</div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
      <AddTodoForm />
      <TodoList />
    </TodoListProvider>
  );
}
