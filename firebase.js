// Import the functions you need from the SDKs you need
import { getApp, initializeApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK1m9RryNtdwukj2oworfl3mtHwntxUtw",
  authDomain: "instagram-clone-b842f.firebaseapp.com",
  projectId: "instagram-clone-b842f",
  storageBucket: "instagram-clone-b842f.appspot.com",
  messagingSenderId: "447467470190",
  appId: "1:447467470190:web:8f946497d2486f6783157f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage =getStorage();

export {app,db,storage};
