import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "../firebase.config";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (isMounted) {
        setCurrentUser(user);
      }
    });

    return () => {
      unsubscribe();
      isMounted = false;
    };
  }, []);

  const providerValue = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

async function signup(name, email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
  return await updateProfile(auth.currentUser, { displayName: name });
}

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
  return signOut(auth);
}

function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export const useAuth = () => useContext(AuthContext);
