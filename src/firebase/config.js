import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBlcTrQ8JXDqpJZqdpS07eLbILd7rJiWhc",
    authDomain: "satisfying-you-d9b26.firebaseapp.com",
    projectId: "satisfying-you-d9b26",
    storageBucket: "satisfying-you-d9b26.appspot.com",
    messagingSenderId: "427566960024",
    appId: "1:427566960024:web:22303dc1a54f4d9c00efed"
};
  
const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export { auth_mod };