import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
const AuthContext = React.createContext();

//use the context
export function useAuth() {
  return useContext(AuthContext); //default value
}

//set the context
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  function signUp(email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        console.log("account created successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function logIn(email, password) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("logged in successfully");
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  }
  function logOut() {
    return auth
      .signOut()
      .then(() => {
        console.log(" Sign-out successful.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      //stores information about current logged userPass
      console.log(currentUser);

      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
