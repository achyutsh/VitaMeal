import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase"; // 🔁 Get Firestore instance
import { doc, setDoc } from "firebase/firestore"; // 🔁 For saving user data


const Pag2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Access email & password passed from LoginScreen
  const email = location.state?.email;
  const password = location.state?.password;

  useEffect(() => {
    if (!email || !password) {
      alert("Please go back and enter your credentials.");
      navigate("/");
    }
  }, [email, password, navigate]);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1980 + 1 }, (_, i) => 1980 + i);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    location: "",
    diabetesType: "",
    diagnosisYear: "",
    physicalActivity: "",
    dietaryRestrictions: "",
    insulinUse: "",
    bloodSugarRange: "",
    foodAllergies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["firstName", "lastName"].includes(name)) {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    if (name === "age") {
      if (!/^\d*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Step 1: Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Step 2: Save form data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        ...formData,
        createdAt: new Date(),
      });
  
      alert("Information saved successfully!");
      navigate("/home");
    } catch (error) {
      alert("Error saving user: " + error.message);
    }
  };
  

  const styles = {
    container: {
      minHeight: "100vh",
      background: `url("/images/tangerine-newt-RgT22Ixcq4Y-unsplash.jpg") center/cover no-repeat`,
      padding: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.7)",
      padding: "30px",
      borderRadius: "20px",
      color: "#fff",
      maxWidth: "600px",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
    label: {
      fontWeight: "bold",
      marginTop: "10px",
      display: "block",
    },
    button: {
      marginTop: "20px",
      backgroundColor: "#000",
      color: "#fff",
      padding: "12px 20px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h2>User Information</h2>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>

          <label style={styles.label}>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Type of Diabetes</label>
          <select
            name="diabetesType"
            value={formData.diabetesType}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select</option>
            <option value="Type 1 diabetes">Type 1 diabetes</option>
            <option value="Type 2 diabetes">Type 2 diabetes</option>
            <option value="Gestational diabetes">Gestational diabetes</option>
            <option value="Maturity onset diabetes of the young (MODY)">MODY</option>
            <option value="Neonatal diabetes">Neonatal diabetes</option>
            <option value="Wolfram Syndrome">Wolfram Syndrome</option>
            <option value="Alström Syndrome">Alström Syndrome</option>
            <option value="LADA">Latent Autoimmune Diabetes in Adults (LADA)</option>
            <option value="Type 3c diabetes">Type 3c diabetes</option>
            <option value="Steroid-induced diabetes">Steroid-induced diabetes</option>
            <option value="Cystic fibrosis diabetes">Cystic fibrosis diabetes</option>
          </select>

          <label style={styles.label}>Year Diagnosed</label>
          <select
            name="diagnosisYear"
            value={formData.diagnosisYear}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <label style={styles.label}>Physical Activity Level</label>
          <input
            type="text"
            name="physicalActivity"
            value={formData.physicalActivity}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Dietary Restrictions</label>
          <input
            type="text"
            name="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Insulin Use</label>
          <select
            name="insulinUse"
            value={formData.insulinUse}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label style={styles.label}>Typical Blood Sugar Range (mg/dL)</label>
          <select
            name="bloodSugarRange"
            value={formData.bloodSugarRange}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select</option>
            <option value="70-99 (Fasting)">70-99 (Fasting)</option>
            <option value="100-125 (Pre-diabetes)">100-125 (Pre-diabetes)</option>
            <option value="126+ (Diabetic)">126+ (Diabetic)</option>
            <option value="140-180 (Post-meal)">140-180 (Post-meal)</option>
          </select>

          <label style={styles.label}>Food Allergies</label>
          <input
            type="text"
            name="foodAllergies"
            value={formData.foodAllergies}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Submit & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pag2;
