import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setIsLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      navigate("/", { replace: true });
    } catch (error) {
      setError("Failed to log in. Check console for errors");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__heading">Log In</h1>
      {error && <div className="error">{error}</div>}
      <label className="form__control-group">
        <span>Email:</span>
        <input type="email" ref={emailRef} required />
      </label>
      <label className="form__control-group">
        <span>Password:</span>
        <input type="password" ref={passwordRef} required />
      </label>
      <button disabled={isLoading} className="form__button--submit">
        Submit
      </button>
      <div>
        Forgot Password? <Link to="/reset-password">Reset Password</Link>
      </div>
      <div>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </form>
  );
}
