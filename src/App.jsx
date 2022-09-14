import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { SignUpPage } from "./pages/SignUpPage";
import { TodoListPage } from "./pages/TodoListPage";
import { PrivateRoute } from "./PrivateRoute";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <TodoListPage />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}
