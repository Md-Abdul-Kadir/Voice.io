import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC38U9m27zNOSIqUxcOXEUPAExPppHZVvU",
  authDomain: "voice-io-ec6e1.firebaseapp.com",
  projectId: "voice-io-ec6e1",
  storageBucket: "voice-io-ec6e1.appspot.com",
  messagingSenderId: "997847148145",
  appId: "1:997847148145:web:19a227dd76277dea181dd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};