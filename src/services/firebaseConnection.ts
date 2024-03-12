// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0elb4rkJlxt9-CJ9OLSIi85DR8LoJx5M",
  authDomain: "dailyfy-bc1fe.firebaseapp.com",
  projectId: "dailyfy-bc1fe",
  storageBucket: "dailyfy-bc1fe.appspot.com",
  messagingSenderId: "878503572513",
  appId: "1:878503572513:web:1cfef3be69bdba829fdf60",
  measurementId: "G-YS6Y9JYLYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export const useFirebase = () => {
    return {db, auth, storage}
};