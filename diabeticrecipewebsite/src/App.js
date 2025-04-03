import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Signed up:", userCredential.user);
      alert("Signed up successfully!");
    } catch (error) {
      alert("Error signing up: " + error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Signed in:", userCredential.user);
      alert("Welcome back!");
    } catch (error) {
      alert("Error signing in: " + error.message);
    }
  };

  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      background: `url("/images/tangerine-newt-RgT22Ixcq4Y-unsplash.jpg") center/cover no-repeat`,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#111", // fallback
    },
    overlay: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
    },
    skipContainer: {
      position: "absolute",
      top: 20,
      right: 20,
    },
    skipButton: {
      backgroundColor: "#fff",
      color: "#000",
      border: "none",
      padding: "8px 16px",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "10px",
      animation: "fadeIn 2s forwards",
    },
    subtitle: {
      fontSize: "1rem",
      marginBottom: "40px",
      lineHeight: 1.4,
      animation: "fadeIn 2s forwards",
      animationDelay: "0.5s",
    },
    emailInput: {
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      minWidth: "240px",
    },
    passwordInput: {
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      minWidth: "240px",
    },
    buttonGroup: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginBottom: "20px",
    },
    emailButton: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "12px 20px",
      fontSize: "16px",
      borderRadius: "25px",
      border: "none",
      cursor: "pointer",
      minWidth: "120px",
    },
    footerText: {
      fontSize: "14px",
    },
  };

  const animationStyle = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{animationStyle}</style>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <div style={styles.skipContainer}>
          <button style={styles.skipButton}>Skip</button>
        </div>
        <h1 style={styles.title}>Welcome to VitaMeal</h1>
        <p style={styles.subtitle}>
          Best Diabetic Food Recommendation
          <br />
          and Quick Recipes
        </p>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.emailInput}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.passwordInput}
        />

        <div style={styles.buttonGroup}>
          <button style={styles.emailButton} onClick={handleSignUp}>
            Sign Up
          </button>
          <button style={styles.emailButton} onClick={handleSignIn}>
            Sign In
          </button>
        </div>

        <p style={styles.footerText}>
          (Use the same credentials to sign in again)
        </p>
      </div>
    </div>
  );
}

export default App;
