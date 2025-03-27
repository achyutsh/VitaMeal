import React from "react";

function App() {
<<<<<<< Updated upstream
  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial" }}>
      <h1>🍏 Diabetic-Friendly Recipe Finder</h1>
      <p>Discover healthy meal alternatives for better glucose control.</p>

      <button
        onClick={() => alert("Feature Coming Soon!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
          borderRadius: "5px",
        }}
      >
        Get Recipes
      </button>
=======
  const styles = {
    container: {
      position: "relative",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      // Reference the image relative to the public folder:
      backgroundImage: 'url("/images/tangerine-newt-RgT22Ixcq4Y-unsplash.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "Arial, sans-serif",
    },
    overlay: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
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
      opacity: 0,
      animation: "fadeIn 2s forwards",
    },
    subtitle: {
      fontSize: "1rem",
      marginBottom: "40px",
      lineHeight: 1.4,
      opacity: 0,
      animation: "fadeIn 2s forwards",
      animationDelay: "0.5s",
    },
    authButtons: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: "20px",
    },
    socialButton: {
      minWidth: "120px",
      padding: "12px 20px",
      borderRadius: "25px",
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
    },
    facebook: {
      backgroundColor: "#3b5998",
      color: "#fff",
    },
    google: {
      backgroundColor: "#fff",
      color: "#000",
      border: "1px solid #ddd",
    },
    orText: {
      fontWeight: "bold",
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
      marginBottom: "20px",
      minWidth: "240px",
    },
    footerText: {
      fontSize: "14px",
    },
    signInLink: {
      color: "#fff",
      textDecoration: "underline",
    },
  };

  // Inject keyframes animation using a <style> tag.
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
        <h1 style={styles.title}>Welcome to Salutem</h1>
        <p style={styles.subtitle}>
          Best Diabetic Food Recommendation
          <br />
          and Quick Recipes
        </p>
        <div style={styles.authButtons}>
          <button style={{ ...styles.socialButton, ...styles.facebook }}>
            Facebook
          </button>
          <button style={{ ...styles.socialButton, ...styles.google }}>
            Google
          </button>
        </div>
        <p style={styles.orText}>or</p>
        <button style={styles.emailButton}>
          Start with email or phone
        </button>
        <p style={styles.footerText}>
          Already have an account?{" "}
          <a href="#" style={styles.signInLink}>
            Sign In
          </a>
        </p>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
