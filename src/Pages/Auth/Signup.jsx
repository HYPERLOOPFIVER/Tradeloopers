import React, { useState } from "react";
import { signUpUser } from "./AuthMethods"; // Import the sign-up method
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Reuse the same Login CSS
import Video from "../../../public/hello.mp4";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Hook for navigating after sign-up

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Call signUpUser to handle Firebase registration and profile creation
      await signUpUser(email, password, name);
      alert("Sign-Up successful!");
      navigate("/login"); // Navigate to login page after successful sign-up
    } catch (error) {
      alert(error.message); // Handle any errors that occur during sign-up
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Background Video */}
      <video autoPlay loop muted className={styles.video}>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Sign-Up Form */}
      <form className={styles.container} onSubmit={handleSignUp}>
        <h2 className={styles.trl}>TRADELOOP</h2>
      
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Capture name input
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Capture email input
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Capture password input
        />
        <button className={styles.button} type="submit">
          Sign Up
        </button>
        <div className={styles.switch}>
          Already have an account?{" "}
          <button type="button" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
