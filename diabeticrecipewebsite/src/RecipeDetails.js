// RecipeDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { name } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/substitutes.json")
      .then((res) => res.json())
      .then((data) => {
        const match = data.find(
          (item) => item.originalIngredientName.toLowerCase() === name.toLowerCase()
        );
        setRecipe(match);
      });
  }, [name]);

  if (!recipe) return <p style={{ padding: 20 }}>Loading or not found...</p>;

  return (
    <div style={{ padding: 30, fontFamily: "Arial, sans-serif" }}>
      <h2>{recipe.originalIngredientName} ➡ {recipe.substituteIngredientName}</h2>
      <p><strong>Substitute Recipe:</strong> {recipe.substituteRecipeName}</p>
      <p><strong>Details:</strong> {recipe.substituteRecipeDetails}</p>
      <p><strong>Key Ingredients:</strong> {recipe.keyIngredients}</p>
      <p><strong>Original Nutrition:</strong> {recipe.calorieAndNutrientCompositionOriginal}</p>
      <p><strong>Substitute Nutrition:</strong> {recipe.calorieAndNutrientCompositionSubstitute}</p>
      <p><strong>Result:</strong> {recipe.results}</p>
    </div>
  );
};

export default RecipeDetails;
