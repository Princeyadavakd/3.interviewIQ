
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
authDomain: "fir-3991b.firebaseapp.com",
  projectId: "fir-3991b",
  storageBucket: "fir-3991b.firebasestorage.app",
  messagingSenderId: "224802287571",
  appId: "1:224802287571:web:86eb5198f4cbb6de328926",
  measurementId: "G-0W0R5THJRB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}