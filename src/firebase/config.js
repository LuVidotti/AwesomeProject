import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyBlcTrQ8JXDqpJZqdpS07eLbILd7rJiWhc",
    authDomain: "satisfying-you-d9b26.firebaseapp.com",
    projectId: "satisfying-you-d9b26",
    storageBucket: "satisfying-you-d9b26.appspot.com",
    messagingSenderId: "427566960024",
    appId: "1:427566960024:web:22303dc1a54f4d9c00efed"
};
  
const app = initializeApp(firebaseConfig);
const auth_mod = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth_mod, app };