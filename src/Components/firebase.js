
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCO4QJDZs9tFaUq-CfiSyJncG8j9hvp7bQ",
  authDomain: "react-auth-98a8d.firebaseapp.com",
  projectId: "react-auth-98a8d",
  storageBucket: "react-auth-98a8d.appspot.com",
  messagingSenderId: "809058646321",
  appId: "1:809058646321:web:d6be2019a8eda8eeb15810"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);