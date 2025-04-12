import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { colors, fonts, effects } from "./theme";
import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

const Pag4 = () => {
  const [substitutes, setSubstitutes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/substitutes.json")
      .then((response) => response.json())
      .then((data) => setSubstitutes(data))
      .catch((error) =>
        console.error("Error fetching local substitutes JSON:", error)
      );
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserInfo(docSnap.data());
          } else {
            console.error("No user document found.");
          }
        } else {
          console.error("No authenticated user found.");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const filteredSubstitutes = userInfo
    ? substitutes.filter(
        (item) =>
          item.diabetesType.toLowerCase().trim() ===
            userInfo.diabetesType.toLowerCase().trim() &&
          item.allergies.toLowerCase().trim() !==
            userInfo.foodAllergies.toLowerCase().trim()
      )
    : substitutes;

  const handleSubstituteClick = (substitute) => {
    const routeName = substitute.originalIngredientName
      .toLowerCase()
      .replace(/\s+/g, "");
    navigate(`/${routeName}`);
  };

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
      width: "150px",
      height: "150px",
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
    substitutesCard: {
      backgroundColor: "#fff",
      borderRadius: effects.borderRadius,
      padding: "20px",
      boxShadow: effects.cardShadow,
    },
    substituteItem: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <div style={styles.card}>
          <div style={styles.greeting}>
            <div style={styles.greetingTitle}>
              👋 Hello
              <br />
              Good Morning, {userInfo ? userInfo.firstName : "Guest"}
            </div>
            <div style={styles.statRow}>
              <span>0 kcal Left</span>
              <span>12g Sugar</span>
              <span>0 cups Water</span>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.alertCard}>
            🍊 Every healthy choice you make is a step toward a brighter, empowered future—keep thriving, because you have the power to transform your health!
          </div>
        </div>

        <input style={styles.searchBar} placeholder="Search recipes" />

        <div style={styles.card}>
          <div style={styles.mealPlanner}>
            <button style={styles.pill}>Breakfast</button>
            <button style={styles.pill}>Lunch</button>
            <button style={styles.pill}>Dinner</button>
            <button style={styles.pill}>Snack</button>
          </div>
        </div>

        <div style={styles.card}>
          <h3>Try these today!</h3>
          <div style={styles.recipeCard}>
            <img src="/images/quinoa.jpg" alt="Quinoa" style={styles.recipeImage} />
            <div style={styles.recipeInfo}>
              <div style={styles.recipeTitle}>Quinoa & Chickpea Salad</div>
              <span>Click to view full recipe</span>
            </div>
          </div>
          <div style={styles.recipeCard}>
            <img src="/images/chiapudding.jpg" alt="Chia" style={styles.recipeImage} />
            <div style={styles.recipeInfo}>
              <div style={styles.recipeTitle}>Chia Pudding with Almond Butter & Berries</div>
              <span>Click to view full recipe</span>
            </div>
          </div>
        </div>

        <div style={styles.substitutesCard}>
          <h3>Some More Options For You!</h3>
          <h2>Don't worry, we know your diet preferences. You can trust us.</h2>
          {filteredSubstitutes.length > 0 ? (
            filteredSubstitutes.map((item, index) => (
              <div
                key={index}
                style={styles.substituteItem}
                onClick={() => handleSubstituteClick(item)}
              >
                {item.originalIngredientName}
              </div>
            ))
          ) : (
            <p>No substitutes found based on your preferences.</p>
          )}
        </div>
      </div>

      <div style={styles.column}>
        <div style={styles.card}>
          <div style={styles.circularGoal}>50%</div>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            You're 50% to your goal!
          </p>
        </div>

        <div style={styles.savedBox}>
          <h4>📁 Saved Recipes</h4>
          <img src="/images/quinoa.jpg" alt="saved" style={styles.recipeImage} />
        </div>
      </div>
    </div>
  );
};

export default Pag4;
