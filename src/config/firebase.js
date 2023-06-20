
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBkn8gpWaLpYlCC4K6VbkyD_H5jLq593-Q",
  authDomain: "tiktok---jornada-da8ad.firebaseapp.com",
  projectId: "tiktok---jornada-da8ad",
  storageBucket: "tiktok---jornada-da8ad.appspot.com",
  messagingSenderId: "210961693381",
  appId: "1:210961693381:web:fcb32c709fdf6080094eac"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;