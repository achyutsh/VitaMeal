import React from "react";
import { Link } from "react-router-dom";
import { colors, fonts, sharedStyles, effects } from "./theme";

const Pag4 = () => {
  const styles = {
    container: {
      fontFamily: fonts.primary,
      backgroundColor: colors.secondary,
      padding: "20px",
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "20px",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: effects.borderRadius,
      padding: "20px",
      boxShadow: effects.cardShadow,
    },
    greeting: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    greetingTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: colors.text,
    },
    statRow: {
      display: "flex",
      gap: "20px",
      fontSize: "14px",
      color: colors.muted,
    },
    alertCard: {
      backgroundColor: "#fff4e5",
      padding: "15px",
      borderRadius: "10px",
      fontSize: "14px",
      boxShadow: effects.cardShadow,
    },
    circularGoal: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "6px solid #4caf50",
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#4caf50",
      margin: "0 auto",
    },
    mealPlanner: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },
    pill: {
      padding: "8px 16px",
      backgroundColor: colors.accent,
      color: "#fff",
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
    },
    recipeCard: {
      display: "flex",
      gap: "10px",
      marginBottom: "15px",
      alignItems: "center",
    },
    recipeImage: {
      width: "60px",
      height: "60px",
      borderRadius: "8px",
      objectFit: "cover",
    },
    recipeInfo: {
      flex: 1,
      fontSize: "14px",
    },
    recipeTitle: {
      fontWeight: "bold",
    },
    savedBox: {
      backgroundColor: "#fff",
      borderRadius: effects.borderRadius,
      padding: "15px",
      boxShadow: effects.cardShadow,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    searchBar: {
      width: "100%",
      padding: "12px",
      borderRadius: "25px",
      border: "none",
      backgroundColor: colors.primary,
      color: "#fff",
      fontSize: "14px",
      marginTop: "auto",
    },
  };

  return (
    <div style={styles.container}>
      {/* Left Column */}
      <div style={styles.column}>
        <div style={styles.card}>
          <div style={styles.greeting}>
            <div style={styles.greetingTitle}>👋 Hello<br />Good Morning, pawahar</div>
            <div style={styles.statRow}>
              <span>0 kcal Left</span>
              <span>12g Sugar</span>
              <span>0 cups Water</span>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.alertCard}>🍊 Missed breakfast? Try adding lemon to your water instead of juice.</div>
        </div>

        <div style={styles.card}>
          <div style={styles.mealPlanner}>
            <button style={styles.pill}>Breakfast</button>
            <button style={styles.pill}>Lunch</button>
            <button style={styles.pill}>Dinner</button>
            <button style={styles.pill}>Snack</button>
          </div>
        </div>

        <div style={styles.card}>
          <h3>🍽️ Featured Recipes</h3>
          <div style={styles.recipeCard}>
            <img src="/images/quinoa.jpg" alt="Quinoa" style={styles.recipeImage} />
            <div style={styles.recipeInfo}>
              <div style={styles.recipeTitle}>Quinoa & Chickpea Salad</div>
              <Link to="/page6">Click here for full recipe</Link>
            </div>
          </div>
          <div style={styles.recipeCard}>
            <img src="/images/chiapudding.jpg" alt="Chia" style={styles.recipeImage} />
            <div style={styles.recipeInfo}>
              <div style={styles.recipeTitle}>Chia Pudding with Almond Butter & Berries</div>
              <Link to="/page5">Click here for full recipe</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div style={styles.column}>
        <div style={styles.card}>
          <div style={styles.circularGoal}>50%</div>
          <p style={{ textAlign: "center", marginTop: "10px" }}>You're 50% to your goal!</p>
        </div>

        <div style={styles.savedBox}>
          <h4>📁 Saved Recipes</h4>
          <img src="/images/quinoa.jpg" alt="saved" style={styles.recipeImage} />
          <img src="/images/chiapudding.jpg" alt="saved" style={styles.recipeImage} />
        </div>

        <input style={styles.searchBar} placeholder="Search recipes" />
      </div>
    </div>
  );
};

export default Pag4;