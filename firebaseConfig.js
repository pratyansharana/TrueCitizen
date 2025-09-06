
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ9nPRbM4NVl1mFBxjSqp-6qT5gwnvkFY",
  authDomain: "truecitizen-c66d2.firebaseapp.com",
  projectId: "truecitizen-c66d2",
  storageBucket: "truecitizen-c66d2.firebasestorage.app",
  messagingSenderId: "895946412418",
  appId: "1:895946412418:web:7182925b207c5b5e5abf9b",
  measurementId: "G-KHDVNWYF8P"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
