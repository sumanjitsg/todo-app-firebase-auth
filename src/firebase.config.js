// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxXMVg35MBMFqNgp8XD7VnRUWt7pXJm28",
  authDomain: "todo-app-codesandbox-f34e3.firebaseapp.com",
  projectId: "todo-app-codesandbox-f34e3",
  storageBucket: "todo-app-codesandbox-f34e3.appspot.com",
  messagingSenderId: "108067354347",
  appId: "1:108067354347:web:e0a2223769411599b4b0ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
