// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyCLJul_6n47-uSZmOsrcajZuu7_6btSBDY",
//   authDomain: "lilies-food-delivery-app.firebaseapp.com",
//   projectId: "lilies-food-delivery-app",
//   storageBucket: "lilies-food-delivery-app.appspot.com",
//   messagingSenderId: "847386362294",
//   appId: "1:847386362294:web:d9cc6ac873bd0724d08117",
//   measurementId: "G-FLLMKJ4G0R"
// };
const firebaseConfig = {
  apiKey: "AIzaSyA-td5CJKFjZkA53DUcnfQE9gIvT9cm4mM",
  authDomain: "lilies-food-delivery.firebaseapp.com",
  projectId: "lilies-food-delivery",
  storageBucket: "lilies-food-delivery.appspot.com",
  messagingSenderId: "608169117916",
  appId: "1:608169117916:web:450e659b418146adbe8c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
