import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAcRFJOMGQkhSmeXsyrIIBcbhsZinJj2eY",
    authDomain: "notdrugs-9279e.firebaseapp.com",
    projectId: "notdrugs-9279e",
    storageBucket: "notdrugs-9279e.appspot.com",
    messagingSenderId: "982452900020",
    appId: "1:982452900020:web:a0341f1593582aeba307e1"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  export const db = getFirestore();