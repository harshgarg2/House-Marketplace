import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCXL8unaogFRoPrfIqtZqzGVbF_YdbOp28",
  authDomain: "house-marketplace-app-46426.firebaseapp.com",
  projectId: "house-marketplace-app-46426",
  storageBucket: "house-marketplace-app-46426.appspot.com",
  messagingSenderId: "348039057519",
  appId: "1:348039057519:web:905063c9e25704fa58fd9a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()