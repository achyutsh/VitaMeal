import React from "react";
import { useNavigate } from "react-router-dom";
import { colors, fonts, sharedStyles, effects } from "./theme";

const Page5 = () => {
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
      backgroundColor: colors.warning,
      color: colors.danger,
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
          src="/images/chiapudding.jpg"
          alt="Chia Pudding"
          style={styles.image}
        />
        <h1 style={styles.title}>Chia Pudding with Almond Butter & Berries</h1>
        <div style={styles.stars}>★★★★★</div>
        <div style={styles.warning}>⚠️ Added Sugar</div>

        <h2 style={sharedStyles.sectionTitle}>What does it replace ??</h2>

        <div style={styles.subSection}>
          <b>Prep Time:</b> 10 minutes (for mixing the chia pudding ingredients and preparing the almond butter and berries)
        </div>
        <div style={styles.subSection}>
          <b>Cook Time:</b> None (Chia pudding sets while refrigerating)
        </div>
        <div style={styles.subSection}>
          <b>Total Time:</b> 10 minutes active prep + 4+ hours of chilling
        </div>

        <h2 style={sharedStyles.sectionTitle}>Ingredients</h2>
        <ul style={styles.list}>
          <li>1/2 cup rolled oats</li>
          <li>1 tbsp chia seeds</li>
          <li>1/2 cup almond milk (or any milk of choice)</li>
          <li>1/4 cup Greek yogurt (optional)</li>
          <li>1/2 tsp vanilla extract</li>
          <li>Fresh berries (strawberries, blueberries, raspberries)</li>
          <li>Honey or maple syrup (optional)</li>
        </ul>

        <h2 style={sharedStyles.sectionTitle}>Instructions</h2>
        <ol style={styles.list}>
          <li>Combine oats, chia seeds, almond milk, yogurt, and vanilla.</li>
          <li>Stir well, cover, and refrigerate overnight.</li>
          <li>Top with fresh berries and drizzle with honey or maple syrup.</li>
          <li>Enjoy straight from the jar or in a bowl!</li>
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

export default Page5;