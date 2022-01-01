import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAMRg6ja2tzYimEmcQkdzT7qM0FotrB9rs",
  authDomain: "house-marketplace-app-71a4e.firebaseapp.com",
  projectId: "house-marketplace-app-71a4e",
  storageBucket: "house-marketplace-app-71a4e.appspot.com",
  messagingSenderId: "608765830298",
  appId: "1:608765830298:web:b32afb3960e3729ded6b23"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()