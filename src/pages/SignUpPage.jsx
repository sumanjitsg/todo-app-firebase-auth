import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function SignUpPage() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuth(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError(null);
      setIsLoading(true);
      await signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );

      navigate("/", { replace: true });
    } catch (error) {
      setError("Failed to create an account. Check console for errors");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__heading">Sign Up</h1>
      {error && <div className="error">{error}</div>}
      <label className="form__control-group">
        <span>Name:</span>
        <input type="text" ref={nameRef} required />
      </label>
      <label className="form__control-group">
        <span>Email:</span>
        <input type="email" ref={emailRef} required />
      </label>
      <label className="form__control-group">
        <span>Password:</span>
        <input type="password" ref={passwordRef} required />
      </label>
      <label className="form__control-group">
        <span>Confirm Password:</span>
        <input type="password" ref={confirmPasswordRef} required />
      </label>
      <button disabled={isLoading} className="form__button--submit">
        Submit
      </button>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </form>
  );
}
