/* eslint-disable react/prop-types */
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";

const AuthContext = createContext();

function AutProvider({ children }) {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
const [userDetail,setCurrentUserDetail]= useState()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserDetail(
          {userId:user.uid,userName:user.displayName,userPhoto:user.photoURL}
        )
        // const uid = user.uid;
        // const displayName = user.displayName;
        // const email = user.email;
        // const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;
    
      } else {
        console.log("Sign Out");
      }
    });
  }, [isAuth]);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuth(true);
        localStorage.setItem("isAuth", JSON.stringify(true));
        window.location.reload();
        // Update the authentication state
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth);
    localStorage.setItem("isAuth", JSON.stringify(false));
    setIsAuth(false);
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, handleLogin, handleSignOut, setIsAuth,userDetail }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuthProvider() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { useAuthProvider, AutProvider };
