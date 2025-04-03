import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiBfLSiATwsmeNd7TGfl3KnmyeQakgHdc",
  authDomain: "vitameal-b39e9.firebaseapp.com",
  projectId: "vitameal-b39e9",
  storageBucket: "vitameal-b39e9.appspot.com",
  messagingSenderId: "4484040528",
  appId: "1:4484040528:web:ebe784ffb6d0f381704e55"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };