import React from "react";
import { useNavigate } from "react-router-dom";
import { colors, fonts, sharedStyles, effects } from "./theme";

const Pag6 = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      padding: "40px",
      backgroundColor: colors.secondary,
      fontFamily: fonts.primary,
      minHeight: "100vh",
    },
    card: {
      backgroundColor: "#fff",
      maxWidth: "800px",
      width: "100%",
      borderRadius: effects.borderRadius,
      boxShadow: effects.cardShadow,
      padding: "30px",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
      marginBottom: "20px",
      objectFit: "cover",
      maxHeight: "300px",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    stars: {
      color: "#ffcc00",
      fontSize: "20px",
      marginBottom: "10px",
    },
    warning: {
      display: "inline-flex",
      alignItems: "center",
      backgroundColor: "#fff8e6",
      color: "#b26a00",
      padding: "6px 12px",
      borderRadius: "8px",
      fontWeight: "bold",
      marginBottom: "20px",
      fontSize: "16px",
    },
    subSection: {
      color: colors.textDark,
      marginBottom: "10px",
      lineHeight: 1.6,
    },
    list: {
      color: "#004d00",
      lineHeight: 1.8,
      marginLeft: "20px",
    },
    footer: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "30px",
    },
  };

  return (
    <div style={styles.page}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div style={styles.card}>
        <img
          src="/images/chickpea-quinoa-salad-with-feta.jpg"
          alt="Quinoa Salad"
          style={styles.image}
        />

        <h1 style={styles.title}>Quinoa & Chickpea Salad with Feta</h1>
        <div style={styles.stars}>★★★★★</div>
        <div style={styles.warning}>⚠️ Contains Dairy (Feta)</div>

        <h2 style={sharedStyles.sectionTitle}>What does it replace ??</h2>
        <div style={styles.subSection}>
          A healthier alternative to pasta salads or mayo-based side dishes. Great for summer meals and high-protein diets.
        </div>

        <div style={styles.subSection}><b>Prep Time:</b> 15 minutes</div>
        <div style={styles.subSection}><b>Cook Time:</b> 15 minutes (for quinoa)</div>
        <div style={styles.subSection}><b>Total Time:</b> 30 minutes</div>

        <h2 style={sharedStyles.sectionTitle}>Ingredients</h2>
        <ul style={styles.list}>
          <li>1 cup cooked quinoa</li>
          <li>1 cup canned chickpeas (rinsed & drained)</li>
          <li>1/2 cup chopped cucumber</li>
          <li>1/2 cup cherry tomatoes (halved)</li>
          <li>1/4 cup chopped red onion</li>
          <li>1/4 cup crumbled feta cheese</li>
          <li>2 tbsp olive oil</li>
          <li>1 tbsp lemon juice</li>
          <li>Salt & pepper to taste</li>
        </ul>

        <h2 style={sharedStyles.sectionTitle}>Instructions</h2>
        <ol style={styles.list}>
          <li>Cook quinoa according to package instructions. Let it cool.</li>
          <li>In a bowl, combine quinoa, chickpeas, cucumber, tomatoes, and red onion.</li>
          <li>Drizzle olive oil and lemon juice over the salad. Toss to combine.</li>
          <li>Top with crumbled feta, season with salt and pepper, and chill before serving.</li>
        </ol>

        <div style={styles.footer}>
          <span style={sharedStyles.backButton} onClick={() => navigate(-1)}>
            ← Back
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pag6;
