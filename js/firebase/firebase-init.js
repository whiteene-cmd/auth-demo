import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


//내꺼-본인껄로 반드시 반드시 꼭 꼭 바꾸세요
const firebaseConfig = {
  apiKey: "AIzaSyAT7nJupDszFXMPH11GXMhFaFGKrZyxA50",
  authDomain: "auth-demo-9ef33.firebaseapp.com",
  projectId: "auth-demo-9ef33",
  storageBucket: "auth-demo-9ef33.firebasestorage.app",
  messagingSenderId: "1035369523132",
  appId: "1:1035369523132:web:6d8fe637b95586df1a2db9",
  measurementId: "G-RREBBW3YP4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {app, auth}