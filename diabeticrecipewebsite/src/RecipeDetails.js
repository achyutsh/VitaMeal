import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { colors, fonts, effects, sharedStyles } from "./theme";

const RecipeDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/substitutes.json")
      .then((res) => res.json())
      .then((data) => {
        const match = data.find(
          (item) =>
            item.originalIngredientName?.toLowerCase().replace(/\s+/g, "") ===
            name.toLowerCase()
        );
        setRecipe(match);
      });
  }, [name]);

  const getStatisticImagePath = (ingredientName) => {
    if (!ingredientName) return null;
    const cleanedName = ingredientName.replace(/\s+/g, "");
    return `${process.env.PUBLIC_URL}/images/${cleanedName}.png`;
  };

  if (!recipe) return <p style={{ padding: 20 }}>Loading or not found...</p>;

  const styles = {
    container: {
      padding: "40px",
      fontFamily: fonts.primary,
      backgroundColor: colors.secondary,
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: effects.borderRadius,
      boxShadow: effects.cardShadow,
      padding: "30px",
      maxWidth: "800px",
      width: "100%",
    },
    title: {
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    detailRow: {
      marginBottom: "16px",
      lineHeight: "1.6",
      color: colors.textDark,
    },
    highlight: {
      fontWeight: "bold",
      color: colors.accent,
    },
    backButton: {
      ...sharedStyles.backButton,
      marginTop: "30px",
      display: "inline-block",
      cursor: "pointer",
    },
    statImage: {
      marginTop: "30px",
      textAlign: "center",
    },
    statImgTag: {
      maxWidth: "100%",
      borderRadius: effects.borderRadius,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          {recipe.originalIngredientName} ➞ {recipe.substituteIngredientName || "Healthy Option"}
        </h2>

        <div style={styles.detailRow}>
          <span style={styles.highlight}>Substitute Recipe:</span> {recipe.substituteRecipeName}
        </div>

        <div style={styles.detailRow}>
          <span style={styles.highlight}>Details:</span> {recipe.substituteRecipeDetails}
        </div>

        <div style={styles.detailRow}>
          <span style={styles.highlight}>Key Ingredients:</span> {recipe.keyIngredients}
        </div>

        <div style={styles.detailRow}>
          <span style={styles.highlight}>Original Nutrition:</span> {recipe.calorieAndNutrientCompositionOriginal}
        </div>

        <div style={styles.detailRow}>
          <span style={styles.highlight}>Substitute Nutrition:</span> {recipe.calorieAndNutrientCompositionSubstitute}
        </div>

        <div style={styles.detailRow}>
          <span style={styles.highlight}>Result:</span> {recipe.results}
        </div>

        {/* New: Statistic Image Section */}
        {recipe.originalIngredientName && (
          <div style={styles.statImage}>
            <img 
              src={getStatisticImagePath(recipe.originalIngredientName)} 
              alt="Statistic chart for recipe" 
              style={styles.statImgTag}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        )}

        <div style={styles.backButton} onClick={() => navigate("/home")}>← Back to Dashboard</div>
      </div>
    </div>
  );
};

export default RecipeDetails;