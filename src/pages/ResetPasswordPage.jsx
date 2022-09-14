import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function ResetPasswordPage() {
  const emailRef = useRef();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { resetPassword } = useAuth(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setSuccess(null);
      setIsLoading(true);
      await resetPassword(emailRef.current.value);
      emailRef.current.value = "";
      setSuccess("Password reset email sent.");
    } catch (error) {
      setError("Failed to reset password. Check console for errors");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__heading">Reset Password</h1>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <label className="form__control-group">
        <span>Email:</span>
        <input type="email" ref={emailRef} required />
      </label>
      <button disabled={isLoading} className="form__button--submit">
        Submit
      </button>
      <div>
        Remember password? <Link to="/login">Log In</Link>
      </div>
    </form>
  );
}
