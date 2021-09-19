/* eslint-disable react-hooks/exhaustive-deps */
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
    return auth.signInWithEmailAndPassword(email, password);
    // .then((user) => {
    //   console.log(user);
    //   console.log("logged in successfully");
    // })
    // .catch((err) => {
    //   console.log(err.message);
    // });
  }
  function logOut() {
    return auth
      .signOut()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  function resetPassword(email) {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("reset email send");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "--", errorMessage);
        // ..
      });
  }
  function updateEmail(email) {
    return auth
      .updateEmail(email)
      .then(() => {
        console.log("password updated successfully");
      })
      .catch(() => {
        console.log("some error occurred during updating password");
      });
  }
  function updatePassword(password) {
    return auth
      .updateEmail(password)
      .then(() => {
        console.log("email updated successfully");
      })
      .catch(() => {
        console.log("some error occurred during updating email");
      });
  }
  useEffect(() => {
    let isMounted = true;
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (isMounted) setCurrentUser(user);

      //stores information about current logged userPass

      setLoading(false);
    });
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);
  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
