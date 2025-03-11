import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAUNv8mVCDA9l2LvPflqNI4oE6VfgBMHAs",
  authDomain: "lifedev-574b1.firebaseapp.com",
  projectId: "lifedev-574b1",
  storageBucket: "lifedev-574b1.firebasestorage.app",
  messagingSenderId: "211398553108",
  appId: "1:211398553108:web:2312c58d62d9a6de328101",
  measurementId: "G-PVB3TZT8K5"
};


const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}