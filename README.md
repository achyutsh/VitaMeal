# VitaMeal 🍽️  
**Diabetic Food Recommendation & Healthy Recipe App**

---

## 🚀 Project Overview

**VitaMeal** is a web application designed to recommend **healthier food substitutes** and **quick diabetic-friendly recipes** based on the user's diabetes type, physical condition, and food allergies.  
Built using **React.js** and **Firebase** services.

---

## ✨ Features

- 🔐 User Authentication (Sign Up and Sign In using email/password)
- 📝 Collect detailed diabetic information from users (Type of diabetes, allergies, diagnosis year, etc.)
- 🥗 Recommend healthy substitute dishes based on:
  - User's diabetes type
  - User's allergy information
- 📖 Full recipe view with nutrition facts and preparation details
- 💬 Built-in AI Chatbot assistant for guidance
- 🌐 Hosted live on Firebase Hosting
- ⚡ Automated deployments with GitHub Actions

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend / Hosting:** Firebase Hosting
- **Authentication:** Firebase Authentication
- **Database:** Firebase Firestore
- **Deployment Automation:** GitHub Actions

---

## 🧠 How It Works (Project Logic)

1. **User Registration and Login**  
   Users sign up using email and password.  
   After signup, they fill a form with personal diabetic information (type of diabetes, allergies, dietary restrictions, etc.).  
   This information is saved securely in Firebase Firestore.

2. **Personalized Dashboard**  
   After login, users land on a personalized dashboard.  
   The app fetches user profile information and filters recommended foods.

3. **Food Recommendation Logic**  
   - **First Filter:** Match dishes based on the user's diabetes type.
   - **Second Filter:** Remove dishes containing ingredients the user is allergic to.
   - If the user has **no allergies**, show all dishes matching their diabetes type.

4. **Full Recipe View**  
   When a user clicks on a suggested dish, they are navigated to a detailed **recipe page** showing:
   - Substitute ingredient
   - Full preparation details
   - Key ingredients
   - Nutritional comparison (original vs substitute)
   - Expected health benefits (results)

5. **Chatbot Assistant**  
   A floating chatbot is available to answer user queries interactively.

---

## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/achyutsh/VitaMeal.git
cd VitaMeal

# Install dependencies
npm install

# Start the development server
npm start

# Build for production
npm run build

# Deploy to Firebase Hosting
firebase deploy
```

---

## 🔥 Live Demo

👉 [Visit VitaMeal Live](https://vitameal-b39e9.web.app)

---

# Thank you for visiting VitaMeal! 🌟
