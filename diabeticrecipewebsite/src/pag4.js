import React, { useEffect, useState } from "react";
import { auth } from "./firebase";

const Pag4 = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      minHeight: "100vh",
    },
    header: {
      backgroundColor: "#f29c7e",
      padding: "10px 20px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "18px",
      marginBottom: "20px",
    },
    avatar: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
    },
    sectionTitle: {
      fontWeight: "bold",
      fontSize: "16px",
      marginBottom: "10px",
    },
    recipeCard: {
      display: "flex",
      gap: "10px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      alignItems: "center",
    },
    recipeImage: {
      width: "70px",
      height: "70px",
      borderRadius: "10px",
      objectFit: "cover",
    },
    recipeText: {
      flex: 1,
    },
    saveButton: {
      backgroundColor: "green",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "6px 12px",
      cursor: "pointer",
    },
    actionButtons: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "20px",
      marginBottom: "20px",
    },
    actionButton: {
      backgroundColor: "#ff3b3f",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      cursor: "pointer",
      gap: "5px",
    },
    searchContainer: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #ccc",
      borderRadius: "25px",
      padding: "8px 15px",
      backgroundColor: "#f29c7e",
    },
    searchInput: {
      flex: 1,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      fontSize: "14px",
    },
    micIcon: {
      marginLeft: "10px",
      cursor: "pointer",
    },
    helpText: {
      color: "green",
      textAlign: "center",
      marginTop: "20px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span>
          Hello {userEmail ? userEmail.split("@")[0] : "there"} !!
        </span>
        <img src="/images/avatar.jpg" alt="Profile" style={styles.avatar} />
      </div>

      <div style={styles.sectionTitle}>Featured Recipes</div>

      <div style={styles.recipeCard}>
        <img src="/images/quinoa.jpg" alt="Quinoa" style={styles.recipeImage} />
        <div style={styles.recipeText}>
          <b>Quinoa & Chickpea Salad</b>
          <p>
            A nutrient-packed, protein-rich salad that's both filling and low on the glycemic index.
            <br />
            <a href="#">Click here for full recipe !!</a>
          </p>
        </div>
        <button style={styles.saveButton}>SAVE</button>
      </div>

      <div style={styles.recipeCard}>
        <img src="/images/chia.jpg" alt="Chia Pudding" style={styles.recipeImage} />
        <div style={styles.recipeText}>
          <b>Chia Pudding with Almond Butter & Berries</b>
          <p>
            A perfect diabetic-friendly breakfast or snack that is rich in fiber and healthy fats.
            <br />
            <a href="#">Click here for full recipe !!</a>
          </p>
        </div>
        <button style={styles.saveButton}>SAVE</button>
      </div>

      <div style={styles.actionButtons}>
        <button style={styles.actionButton}>📋 Substitutions</button>
        <button style={styles.actionButton}>📁 Saved Recipes</button>
      </div>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search recipes"
          style={styles.searchInput}
        />
        <span style={styles.micIcon}>🎤</span>
      </div>

      <div style={styles.helpText}>Need Assistance ??</div>
    </div>
  );
};

export default Pag4;
