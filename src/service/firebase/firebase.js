// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC7mmSK2-N-AuJ0xpBzuZcvnyXVJwLJNHs",
    authDomain: "assignment-10-d4641.firebaseapp.com",
    projectId: "assignment-10-d4641",
    storageBucket: "assignment-10-d4641.appspot.com",
    messagingSenderId: "499513278780",
    appId: "1:499513278780:web:fbd8d59c1dd4bbdeaade39"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth