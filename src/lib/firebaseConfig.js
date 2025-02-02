import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDmvIoAfTom_6Y_73XNIf-KHG0QNl-JfME",
    authDomain: "login-firebase-59296.firebaseapp.com",
    projectId: "login-firebase-59296",
    storageBucket: "login-firebase-59296.firebasestorage.app",
    messagingSenderId: "1045299898968",
    appId: "1:1045299898968:web:fbd56079329a868e92b82d"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);
const logout = () => signOut(auth);

export { auth, signInWithGoogle, logout };
