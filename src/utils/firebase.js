// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0gjvTuVFgY96fnOXE29B-EF0Lidia8EI",
  authDomain: "netflix-gpt-e1393.firebaseapp.com",
  projectId: "netflix-gpt-e1393",
  storageBucket: "netflix-gpt-e1393.appspot.com",
  messagingSenderId: "400340412561",
  appId: "1:400340412561:web:d61bec2f20130231757730",
  measurementId: "G-9YLCQTSXJX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
