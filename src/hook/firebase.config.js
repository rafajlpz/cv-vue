// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
//Cloud Storage
import { getStorage } from "firebase/storage";
// import { getStorage}  from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSSjhx0iY1r8QnVZf4l7GCZrDXHgj8m5w",
  authDomain: "curriculum-vitae-rafa.firebaseapp.com",
  projectId: "curriculum-vitae-rafa",
  storageBucket: "curriculum-vitae-rafa.appspot.com",
  messagingSenderId: "955798085111",
  appId: "1:955798085111:web:5da0e7d0d108165dd862f2"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth();

//Iniciar Cloud Firestore y obtener referencia del servicio
//Autentificacion



