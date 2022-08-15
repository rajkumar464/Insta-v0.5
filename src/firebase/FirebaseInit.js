import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyCHwAaUWFOm6YEuqdpPAKjJGHnXdnFUn34",
  authDomain: "insta-clone-96ad0.firebaseapp.com",
  projectId: "insta-clone-96ad0",
  storageBucket: "insta-clone-96ad0.appspot.com",
  messagingSenderId: "10489687266",
  appId: "1:10489687266:web:32bebe99421351e5b4c2bb",
  measurementId: "G-WSGFNDVN65"
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };
