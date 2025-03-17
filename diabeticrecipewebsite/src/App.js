import React from "react";

function App() {
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
    </div>
  );
}

export default App;
