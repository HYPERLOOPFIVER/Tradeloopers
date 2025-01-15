import React, { useState } from "react";
import { signInUser } from "./AuthMethods";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Video from '../../../public/nope (2).mp4'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true during login process

    try {
      await signInUser(email, password); // Sign in user without saving to localStorage
      navigate("/home"); // Redirect after successful login
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false); // Reset loading state once login is complete
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Background Video */}
      <video autoPlay loop muted className={styles.video}>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form */}
      <form className={styles.container} onSubmit={handleLogin}>
        <h2 className={styles.trl}>TRADELOOP</h2>
       
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading} // Disable inputs while loading
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading} // Disable inputs while loading
        />
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className={styles.switch}>
          Don't have an account?{" "}
          <button type="button" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
