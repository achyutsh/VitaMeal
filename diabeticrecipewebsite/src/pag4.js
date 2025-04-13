import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { colors, fonts, effects } from "./theme";
import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";

const Pag4 = () => {
  const [substitutes, setSubstitutes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hey there! Want to try something new today?" },
  ]);
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert("Error signing out: " + error.message);
    }
  };

  const sendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage = { from: "user", text: chatInput };
    setMessages((prev) => [...prev, userMessage]);
    setChatInput("");
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: chatInput }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
      setTimeout(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }, 100);
    } catch (err) {
      setMessages((prev) => [...prev, { from: "bot", text: "⚠️ Sorry, something went wrong." }]);
    }
  };

  useEffect(() => {
    fetch("/substitutes.json")
      .then((response) => response.json())
      .then((data) => setSubstitutes(data))
      .catch((error) => console.error("Error fetching local substitutes JSON:", error));
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
    const routeName = substitute.originalIngredientName.toLowerCase().replace(/\s+/g, "");
    navigate(`/${routeName}`);
  };

  const styles = {
    ...effects,
    container: {
      fontFamily: fonts.primary,
      backgroundColor: colors.secondary,
      padding: "30px",
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "20px",
      position: "relative",
    },
    logoutBtn: {
      position: "absolute",
      top: "20px",
      right: "20px",
      padding: "10px 16px",
      backgroundColor: "#ff4d4d",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      zIndex: 999,
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
    substitutesCard: {
      backgroundColor: "#fff",
      borderRadius: effects.borderRadius,
      padding: "20px",
      boxShadow: effects.cardShadow,
    },
    substituteGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
      marginTop: "20px",
    },
    substituteItem: {
      padding: "20px",
      backgroundColor: "#fdfdfd",
      borderRadius: "14px",
      cursor: "pointer",
      boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      textAlign: "center",
      fontWeight: "500",
      fontSize: "15px",
      letterSpacing: "0.3px",
      lineHeight: "1.4",
    },
    greeting: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    greetingTitle: {
      fontSize: "24px",
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
    savedBox: {
      backgroundColor: "#fff",
      borderRadius: effects.borderRadius,
      padding: "15px",
      boxShadow: effects.cardShadow,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    recipeCard: {
      display: "flex",
      gap: "10px",
      marginBottom: "15px",
      alignItems: "center",
      cursor: "pointer",
    },
    recipeImage: {
      width: "100px",
      height: "100px",
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
    chatButton: {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "50px",
      border: "none",
      cursor: "pointer",
      zIndex: 999,
    },
    chatBox: {
      position: "fixed",
      bottom: "100px",
      right: "30px",
      width: "300px",
      maxHeight: "400px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      zIndex: 998,
    },
    chatMessages: {
      flex: 1,
      padding: "10px",
      overflowY: "auto",
    },
    chatInputWrapper: {
      borderTop: "1px solid #eee",
      display: "flex",
    },
    chatInput: {
      flex: 1,
      border: "none",
      padding: "10px",
      outline: "none",
    },
    chatSend: {
      border: "none",
      padding: "10px",
      backgroundColor: colors.accent,
      color: "white",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>

      <div style={styles.column}>
        <div style={styles.card}>
          <div style={styles.greeting}>
            <div style={styles.greetingTitle}>👋 Hello<br />Good Morning, {userInfo ? userInfo.firstName : "Guest"}</div>
            <div style={styles.statRow}><span>0 kcal Left</span><span>12g Sugar</span><span>0 cups Water</span></div>
          </div>
        </div>

        <div style={styles.card}><div style={styles.alertCard}>🍊 Every healthy choice you make is a step toward a brighter, empowered future—keep thriving, because you have the power to transform your health!</div></div>

        <div style={styles.card}>
          <h3>Try these today!</h3>
          <div style={styles.recipeCard} onClick={() => navigate("/quinoa")}>
            <img src="/images/quinoa.jpg" alt="Quinoa" style={styles.recipeImage} />
            <div style={styles.recipeInfo}>
              <div style={styles.recipeTitle}>Quinoa & Chickpea Salad</div>
              <span>Click to view full recipe</span>
            </div>
          </div>
          <div style={styles.recipeCard} onClick={() => navigate("/chiapudding")}>
            <img src="/images/chiapudding.jpg" alt="Chia" style={styles.recipeImage} />
            <div style={styles.recipeInfo}>
              <div style={styles.recipeTitle}>Chia Pudding with Almond Butter & Berries</div>
              <span>Click to view full recipe</span>
            </div>
          </div>
        </div>

        <div style={styles.substitutesCard}>
          <h3>Healthy Ingredient Swaps Just For You!</h3>
          <p>Tap on any item below to view a diabetes-friendly alternative based on your preferences.</p>
          <div style={styles.substituteGrid}>
            {filteredSubstitutes.length > 0 ? (
              filteredSubstitutes.map((item, index) => (
                <div
                  key={index}
                  style={styles.substituteItem}
                  onClick={() => handleSubstituteClick(item)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
                  }}
                >
                  {item.originalIngredientName}
                </div>
              ))
            ) : (
              <p>No substitutes found based on your preferences.</p>
            )}
          </div>
        </div>
      </div>

      <div style={styles.column}>
        <div style={styles.card}>
          <div style={styles.circularGoal}>50%</div>
          <p style={{ textAlign: "center", marginTop: "10px" }}>You're 50% to your goal!</p>
        </div>

        <div style={styles.savedBox}>
          <h4>📁 Saved Recipes</h4>
          <img src="/images/quinoa.jpg" alt="saved" style={{ width: "80px", borderRadius: "8px" }} />
        </div>
      </div>

      <button style={styles.chatButton} onClick={() => setChatOpen(!chatOpen)}>
        {chatOpen ? "Close Chat" : "💬 Chat"}
      </button>

      {chatOpen && (
        <div style={styles.chatBox}>
          <div style={styles.chatMessages} ref={chatContainerRef}>
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: "8px", textAlign: msg.from === "bot" ? "left" : "right" }}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div style={styles.chatInputWrapper}>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              style={styles.chatInput}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} style={styles.chatSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pag4;
