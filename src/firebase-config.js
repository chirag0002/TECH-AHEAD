import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyBcZckYkMprmIOfbnhYQ8zGH33iSrx5Pas",
  authDomain: "tech-ahead.firebaseapp.com",
  projectId: "tech-ahead",
  storageBucket: "tech-ahead.appspot.com",
  messagingSenderId: "168968571521",
  appId: "1:168968571521:web:5b068b8a0e3b4ec483db80",
  measurementId: "G-V5PQYP5YDC"
};



const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

export default authentication;